using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class PaymentMethodApplicationService :
        CrudAppService<
        PaymentMethod,
        PaymentMethodDto,
        int,
        PagedAndSortedResultRequestDto,
        PaymentMethodDto>,
        IApplicationService
    {
        public PaymentMethodApplicationService(IRepository<PaymentMethod, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        private readonly IRepository<PaymentMethod, int> repository;
    }
}
