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
        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
