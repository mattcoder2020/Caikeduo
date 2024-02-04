using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace caikdduopos.Entity
{
    public class Product :Entity<int>
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public double Cost { get; set; }
        public string Description { get; set; }
        public ProductType ProductType { get; set; }
    }
}
