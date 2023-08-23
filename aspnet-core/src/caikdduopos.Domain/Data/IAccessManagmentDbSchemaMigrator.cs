using System.Threading.Tasks;

namespace caikdduopos.Data;

public interface IAccessManagmentDbSchemaMigrator
{
    Task MigrateAsync();
}
