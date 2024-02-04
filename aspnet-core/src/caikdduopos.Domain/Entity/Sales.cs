using Volo.Abp.Domain.Entities;
using System;

namespace caikdduopos.Entity
{
    public class Sales:Entity<Guid>
    {
        public double Amount { get; set; }
        public Member Member { get; set; }
        public SalesType SalesType { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
       
        public int SalesTypeId { get; set; }
        public int PaymentMethodId { get; set; }
        public int MemberId { get; set; }




    }
}
