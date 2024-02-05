using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class PaymentMethod : Entity<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDefault { get; set; }
    }
}