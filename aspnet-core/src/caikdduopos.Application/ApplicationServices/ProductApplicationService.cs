using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class ProductApplicationService :
        CrudAppService<
        Product,
        ProductDto,
        int,
        PagedAndSortedResultRequestDto,
        ProductDto>,
        IApplicationService
    {
        private readonly IRepository<Product, int> repository;

        public ProductApplicationService(IRepository<Product, int> repository) : base(repository)
        {
            this.repository = repository;
        }

       
    }
}
