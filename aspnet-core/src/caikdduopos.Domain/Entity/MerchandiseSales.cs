using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class MerchandiseSales : Entity<Guid>
    {
        public Sales Sales { get; set; }
        public Cashier Cashier { get; set; }
        public SalesRep SalesRep { get; set; }
        public Product Product { get; set; }

        //public Guid CashierId { get; set; }
        //public Guid SalesRepId { get; set; }
    }
}
