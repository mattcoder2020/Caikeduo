using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class SalesDto : AuditedEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public double Amount { get; set; }
        public MemberDto Member { get; set; }
        public SalesTypeDto SalesType { get; set; }
        public PaymentMethodDto PaymentMethod { get; set; }
       
        public int SalesTypeId { get; set; }
        public int PaymentMethodId { get; set; }
        public int MemberId { get; set; }




    }
}
