using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using caikdduopos.Data;
using Volo.Abp.DependencyInjection;

namespace caikdduopos.EntityFrameworkCore;

public class EntityFrameworkCoreAccessManagmentDbSchemaMigrator
    : IAccessManagmentDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreAccessManagmentDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the AccessManagmentDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AccessManagmentDbContext>()
            .Database
            .MigrateAsync();
    }
}
