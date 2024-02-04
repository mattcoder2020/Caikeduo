using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class ProductTypeDto: AuditedEntityDto<int>
    {
        int Id { get; set; }
        string Name { get; set; }
    }
}
