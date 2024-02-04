using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class ProductTypeApplicationService :
        CrudAppService<
        ProductType,
        ProductTypeDto,
        int,
        PagedAndSortedResultRequestDto,
        ProductTypeDto>,
        IApplicationService
    {
        public ProductTypeApplicationService(IRepository<ProductType, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        private readonly IRepository<ProductType, int> repository;
    }
}
