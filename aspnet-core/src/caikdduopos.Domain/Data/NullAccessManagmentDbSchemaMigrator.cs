using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace caikdduopos.Data;

/* This is used if database provider does't define
 * IAccessManagmentDbSchemaMigrator implementation.
 */
public class NullAccessManagmentDbSchemaMigrator : IAccessManagmentDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
