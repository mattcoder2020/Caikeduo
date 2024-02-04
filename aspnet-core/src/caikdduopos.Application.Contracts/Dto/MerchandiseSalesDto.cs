using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class MerchandiseSalesDto : AuditedEntityDto<Guid>
    {
        public Guid SalesId { get; set; }
        public CashierDto Cashier { get; set; }
        public SalesRepDto SalesRep { get; set; }
        public ProductDto Product { get; set; }
        public SalesDto Sales { get; set; }
        //public Guid CashierId { get; set; }
        //public Guid SalesRepId { get; set; }
    }
}
