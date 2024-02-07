using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class MerchandiseSales : Entity<Guid>
    {
        public Sales Sales { get; set; }
        public SalesRep SalesRep { get; set; }
        public int SalesRepId { get; set; }
       

        //public Guid CashierId { get; set; }
        //public Guid SalesRepId { get; set; }
    }
}
