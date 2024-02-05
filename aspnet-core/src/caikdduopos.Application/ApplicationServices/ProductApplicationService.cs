using caikdduopos.AggregateRoots;
using caikdduopos.Dto;
using caikdduopos.Dto.Create;
using caikdduopos.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace caikdduopos.ApplicationServices
{
    public class ProductApplicationService :
        CrudAppService<
        Product,
        ProductDto,
        int,
        PagedAndSortedResultRequestDto,
        CreateProductDto>,
        //IProductApplicationService
        IApplicationService
    {
        private readonly IRepository<Product, int> repository;

        public ProductApplicationService(IRepository<Product, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<PagedResultDto<ProductDto>> GetProductsWithDetailAsync()
        {
             var query = await repository.WithDetailsAsync();
            query = query.Include(e => e.ProductType);
            List<Product> product = await query.ToListAsync();

            var totalCount = await query.CountAsync();

            //var filteredQuery = ApplySorting(query, q);

            var items = await query.ToListAsync();

            var dtos = ObjectMapper.Map<List<Product>, List<ProductDto>>(items);

            return new PagedResultDto<ProductDto>(totalCount, dtos);
        }

    }
}
