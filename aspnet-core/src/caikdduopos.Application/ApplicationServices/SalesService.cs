using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class SalesApplicationService :
        CrudAppService<
        Sales,
        SalesDto,
        Guid,
        PagedAndSortedResultRequestDto,
        SalesDto>,
        IApplicationService
    {
        public SalesApplicationService(IRepository<Sales, Guid> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<List<SalesOverViewDto>> GetSalesOverView()
        {
            var allsales = await this.repository.GetListAsync();
            //Retail Sales
            var retailoverview = new SalesOverViewDto { SalesType ="retail"  };

            var retaillist = allsales.FindAll(s => s.SalesTypeId == 1);
            retailoverview.TotalSales = retaillist.Sum(s => s.Amount);
            retailoverview.TotalOrder = retaillist.Count();
            retailoverview.AverageAmount = retaillist.Average(s => s.Amount);
            retailoverview.SalesByCash = retaillist.FindAll(s=>s.PaymentMethodId == 1).Sum(s=>s.Amount);
            retailoverview.SalesByUnionPay = retaillist.FindAll(s => s.PaymentMethodId == 2).Sum(s => s.Amount);
            retailoverview.SalesByWeChat = retaillist.FindAll(s => s.PaymentMethodId == 3).Sum(s => s.Amount);
            retailoverview.SalesByAliPay = retaillist.FindAll(s => s.PaymentMethodId == 4).Sum(s => s.Amount);
            retailoverview.SalesByWeChat = retaillist.FindAll(s => s.PaymentMethodId == 3).Sum(s => s.Amount);

            //Whole Sales
            var wholeoverview = new SalesOverViewDto { SalesType = "wholesale" };

            var wholesalelist = allsales.FindAll(s => s.SalesTypeId == 2);
            wholeoverview.TotalSales = wholesalelist.Sum(s => s.Amount);
            wholeoverview.AverageAmount = wholesalelist.Average(s => s.Amount);
            wholeoverview.SalesByCash = retaillist.FindAll(s => s.PaymentMethodId == 1).Sum(s => s.Amount);
            wholeoverview.SalesByCash = wholesalelist.FindAll(s => s.PaymentMethodId == 1).Sum(s => s.Amount);
            wholeoverview.SalesByUnionPay = wholesalelist.FindAll(s => s.PaymentMethodId == 2).Sum(s => s.Amount);
            wholeoverview.SalesByWeChat = wholesalelist.FindAll(s => s.PaymentMethodId == 3).Sum(s => s.Amount);
            wholeoverview.SalesByAliPay = wholesalelist.FindAll(s => s.PaymentMethodId == 4).Sum(s => s.Amount);
            wholeoverview.SalesByWeChat = wholesalelist.FindAll(s => s.PaymentMethodId == 3).Sum(s => s.Amount);

            return new List<SalesOverViewDto> { retailoverview, wholeoverview };

        }

        private readonly IRepository<Sales, Guid> repository;
    }
}
