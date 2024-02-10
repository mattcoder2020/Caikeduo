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

namespace caikdduopos.ApplicationServices
{
    public class WholeSalesApplicationService : 
        CrudAppService<
        WholeSales,
        WholeSalesDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateWholeSalesDto>, 
        IApplicationService
    {
        private readonly IRepository<WholeSales, Guid> repository;
        public WholeSalesApplicationService(IRepository<WholeSales, Guid> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<PagedResultDto<WholeSalesDto>> GetWholeSalesWithDetailAsync()
        {
            var query = await repository.WithDetailsAsync();
            query = query.Include(e => e.Sales);
            query = query.Include(e => e.Sales.Member);
            query = query.Include(e => e.Sales.PaymentMethod);
            query = query.Include(e => e.Sales.Product);
            query = query.Include(e => e.Sales.SalesType);


            List<WholeSales> merchandiseSales = await query.ToListAsync();
            var totalCount = await query.CountAsync();
            var items = await query.ToListAsync();
            var dtos = ObjectMapper.Map<List<WholeSales>, List<WholeSalesDto>>(items);
            return new PagedResultDto<WholeSalesDto>(totalCount, dtos);
        }

       
    }
}   
