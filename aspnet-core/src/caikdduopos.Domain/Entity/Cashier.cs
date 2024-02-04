using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class Cashier : Entity<int>
    {
        public string Name { get; set; }
    }
}