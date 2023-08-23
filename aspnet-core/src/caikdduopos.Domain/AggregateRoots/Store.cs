using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using caikdduopos.Enums;
using Volo.Abp.Domain.Entities.Auditing;

namespace caikdduopos.AggregateRoots
{
    public class Store:AuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public StoreStatus Status { get; set; }
    }
}
