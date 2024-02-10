using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace caikdduopos.Dto
{
    public class SalesOverViewDto
    {
        public string SalesType { get ; set; }
        public double TotalSales { get; set; }
        public int TotalOrder { get; set; }
        public double AverageAmount { get; set; }
        public double SalesByUnionPay { get; set; }
        public double SalesByWeChat { get; set; }
        public double SalesByAliPay { get; set; }
        public double SalesByCash { get; set; }

      

    }
}
