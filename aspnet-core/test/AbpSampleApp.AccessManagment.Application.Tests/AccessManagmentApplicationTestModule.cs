using Volo.Abp.Modularity;

namespace caikdduopos;

[DependsOn(
    typeof(AccessManagmentApplicationModule),
    typeof(AccessManagmentDomainTestModule)
    )]
public class AccessManagmentApplicationTestModule : AbpModule
{

}
