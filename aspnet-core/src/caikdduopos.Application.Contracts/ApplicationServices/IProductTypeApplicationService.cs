using caikdduopos.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace caikdduopos.ApplicationServices
{
    public interface IProductTypeApplicationService: ICrudAppService
        <ProductTypeDto, int, PagedResultRequestDto, ProductTypeDto>
    {
    }
}
