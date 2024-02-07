using Volo.Abp.Domain.Entities;
using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class PaymentMethodDto : EntityDto<int>
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDefault { get; set; }
    }
}