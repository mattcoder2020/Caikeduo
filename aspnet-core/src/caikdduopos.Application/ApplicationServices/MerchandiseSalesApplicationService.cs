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
    public class MerchandiseSalesApplicationService : 
        CrudAppService<
        MerchandiseSales,
        MerchandiseSalesDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateMerchandiseSalesDto>, 
        IApplicationService
    {
        private readonly IRepository<MerchandiseSales, Guid> repository;
        public MerchandiseSalesApplicationService(IRepository<MerchandiseSales, Guid> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<PagedResultDto<MerchandiseSalesDto>> GetMerchandiseSalesWithDetailAsync()
        {
            var query = await repository.WithDetailsAsync();
            query = query.Include(e => e.SalesRep);
            query = query.Include(e => e.Sales);
            query = query.Include(e => e.Sales.Member);
            query = query.Include(e => e.Sales.PaymentMethod);
            query = query.Include(e => e.Sales.Product);
            query = query.Include(e => e.Sales.SalesType);


            List<MerchandiseSales> merchandiseSales = await query.ToListAsync();
            var totalCount = await query.CountAsync();
            var items = await query.ToListAsync();
            var dtos = ObjectMapper.Map<List<MerchandiseSales>, List<MerchandiseSalesDto>>(items);
            return new PagedResultDto<MerchandiseSalesDto>(totalCount, dtos);
        }

       
    }
}   
