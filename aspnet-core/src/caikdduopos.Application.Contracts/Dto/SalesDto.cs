using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class SalesDto : EntityDto<Guid>
    {
        public double Amount { get; set; }
        public MemberDto Member { get; set; }
        public SalesTypeDto SalesType { get; set; }
        public PaymentMethodDto PaymentMethod { get; set; }
        public ProductDto Product { get; set; }
        public int Quantity { get; set; }
        public double Discount { get; set; }

    }
}
