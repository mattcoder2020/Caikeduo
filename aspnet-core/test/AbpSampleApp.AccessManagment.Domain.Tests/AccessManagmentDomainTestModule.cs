using caikdduopos.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace caikdduopos;

[DependsOn(
    typeof(AccessManagmentEntityFrameworkCoreTestModule)
    )]
public class AccessManagmentDomainTestModule : AbpModule
{

}
