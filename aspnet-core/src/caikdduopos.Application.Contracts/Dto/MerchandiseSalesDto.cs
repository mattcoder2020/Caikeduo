using caikdduopos.Dto.Create;
using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class MerchandiseSalesDto:EntityDto<Guid> 
    {
        public Guid SalesId { get; set; }
        public SalesRepDto SalesRep { get; set; }
        public SalesDto Sales { get; set; }
        
    }
}
