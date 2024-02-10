using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class WholeSales : Entity<Guid>
    {
        public Sales Sales { get; set; }
        public String DeliveryAddress { get; set; }
        public String DeliveryMethod { get; set; }
       

        //public Guid CashierId { get; set; }
        //public Guid SalesRepId { get; set; }
    }
}
