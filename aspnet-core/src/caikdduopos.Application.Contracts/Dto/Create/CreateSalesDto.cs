using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto.Create
{
    public class CreateSalesDto 
    {
        public Guid Id { get; set; }
        public decimal Amount { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }

        public int SalesTypeId { get; set; }
        public int PaymentMethodId { get; set; }
        public int MemberId { get; set; }
        public int ProductId { get; set; }

    }
}
