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
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public double Discount { get; set; }
       
        public int SalesTypeId { get; set; }
        public int PaymentMethodId { get; set; }
        public int MemberId { get; set; }
        public int ProductId { get; set; }




    }
}
