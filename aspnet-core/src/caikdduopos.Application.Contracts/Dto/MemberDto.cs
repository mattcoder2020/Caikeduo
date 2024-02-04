using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace caikdduopos.Dto
{
    public class MemberDto : AuditedEntityDto<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public double Discount { get; set; }
        public string PhoneNumber { get; set; }
        public DateOnly BirthDate { get; set; }
        public DateOnly ExpiryDate { get; set; }
    }
}
