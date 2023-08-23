# Stage 1: Build and publish .NET Application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS dotnet-build
WORKDIR /app
EXPOSE 443 

# Copy the ABP Framework solution to the container
COPY aspnet-core/ ./

# publish the migrator artifacts to /app/migrator
WORKDIR /app/src/caikdduopos.DbMigrator
RUN dotnet build caikdduopos.DbMigrator.csproj -c Release 

# publish the migrator artifacts to /app/host
WORKDIR /app/src/caikdduopos.HttpApi.Host
RUN dotnet build caikdduopos.HttpApi.Host.csproj -c Release 

#COPY aspnet-core/src/caikdduopos.HttpApi.Host/wwwroot /app/caikdduopos.HttpApi.Host/wwwroot

# Stage 2: Create the final runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app


# Copy the published .NET application from the previous stage
COPY --from=dotnet-build /app/ ./

#COPY entrypoint.sh ./

# Expose the ports used by the application


CMD ["sh", "-c", "dotnet /app/src/caikdduopos.DbMigrator/bin/Release/net7.0/caikdduopos.DbMigrator.dll --environment docker&& dotnet /app/src/caikdduopos.HttpApi.Host/bin/Release/net7.0/caikdduopos.HttpApi.Host.dll --environment docker"]


