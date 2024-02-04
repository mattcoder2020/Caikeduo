using Volo.Abp.Domain.Entities;
using System;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class CashierDto : AuditedEntityDto<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}