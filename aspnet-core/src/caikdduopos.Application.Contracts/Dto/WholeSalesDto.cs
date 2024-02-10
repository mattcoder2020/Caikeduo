using caikdduopos.Dto.Create;
using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class WholeSalesDto:EntityDto<Guid> 
    {
        public String DeliveryAddress { get; set; }
        public String DeliveryMethod { get; set; }
        public SalesDto Sales { get; set; }
        
    }
}
