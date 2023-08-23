using caikdduopos.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace caikdduopos.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class AccessManagmentController : AbpControllerBase
{
    protected AccessManagmentController()
    {
        LocalizationResource = typeof(AccessManagmentResource);
    }
}
