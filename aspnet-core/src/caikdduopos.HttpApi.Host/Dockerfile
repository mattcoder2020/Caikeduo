#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["NuGet.Config", "."]
COPY ["src/caikdduopos.HttpApi.Host/caikdduopos.HttpApi.Host.csproj", "src/caikdduopos.HttpApi.Host/"]
COPY ["src/caikdduopos.Application/caikdduopos.Application.csproj", "src/caikdduopos.Application/"]
COPY ["src/caikdduopos.Domain/caikdduopos.Domain.csproj", "src/caikdduopos.Domain/"]
COPY ["src/caikdduopos.Application.Contracts/caikdduopos.Application.Contracts.csproj", "src/caikdduopos.Application.Contracts/"]
COPY ["src/caikdduopos.Domain.Shared/caikdduopos.Domain.Shared.csproj", "src/caikdduopos.Domain.Shared/"]
COPY ["src/caikdduopos.EntityFrameworkCore/caikdduopos.EntityFrameworkCore.csproj", "src/caikdduopos.EntityFrameworkCore/"]
COPY ["src/caikdduopos.HttpApi/caikdduopos.HttpApi.csproj", "src/caikdduopos.HttpApi/"]
RUN dotnet restore "src/caikdduopos.HttpApi.Host/caikdduopos.HttpApi.Host.csproj"
COPY . .
WORKDIR "/src/src/caikdduopos.HttpApi.Host"
RUN dotnet build "caikdduopos.HttpApi.Host.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "caikdduopos.HttpApi.Host.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "caikdduopos.HttpApi.Host.dll"]