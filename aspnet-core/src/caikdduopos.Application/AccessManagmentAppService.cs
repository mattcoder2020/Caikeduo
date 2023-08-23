using System;
using System.Collections.Generic;
using System.Text;
using caikdduopos.Localization;
using Volo.Abp.Application.Services;

namespace caikdduopos;

/* Inherit your application services from this class.
 */
public abstract class AccessManagmentAppService : ApplicationService
{
    protected AccessManagmentAppService()
    {
        LocalizationResource = typeof(AccessManagmentResource);
    }
}
