using caikdduopos.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace caikdduopos.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AccessManagmentEntityFrameworkCoreModule),
    typeof(AccessManagmentApplicationContractsModule)
    )]
public class AccessManagmentDbMigratorModule : AbpModule
{
}
