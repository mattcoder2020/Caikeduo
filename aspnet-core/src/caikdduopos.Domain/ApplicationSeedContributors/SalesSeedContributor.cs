
using caikdduopos.Entity;
using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationSeedContributors
{
    public class SalesSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<MerchandiseSales, Guid> _mrepository;
        private readonly IRepository<WholeSales, Guid> _wrepository;


        public SalesSeedContributor(IRepository<MerchandiseSales, Guid> mrepository, IRepository<WholeSales, Guid> wrepository )
        {
            _mrepository = mrepository;
            _wrepository = wrepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            //Check if the Store table is already populated
            if (await _mrepository.GetCountAsync() == 0)
            {
                var MerchandiseSales = new[]
               {
               new MerchandiseSales
               {
                 SalesRepId = 1,
                 Sales = new Sales
                 {
                     Amount = 1000,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new MerchandiseSales
               {
                 SalesRepId = 2,
                 Sales = new Sales
                 {
                     Amount = 1500,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new MerchandiseSales
               {
                 SalesRepId = 1,
                 Sales = new Sales
                 {
                     Amount = 1000,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
            };

                await _mrepository.InsertManyAsync(MerchandiseSales, autoSave: true);
            }

            // Seed initial data for the Store aggregate root

        

         if (await _wrepository.GetCountAsync() == 0)
            {
                var WholeSales = new[]
               {
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 1000,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 1500,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 800,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 1000,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 1500,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               },
               new WholeSales
               {
                 DeliveryAddress = "xxx, xxx avenue, xxx city",
                 DeliveryMethod = "Railway",
                 Sales = new Sales
                 {
                     Amount = 800,
                     Discount = 20,
                     MemberId = 1,
                     PaymentMethodId = 1,
                     ProductId = 1,
                     SalesTypeId = 1
                 }
               }
                };

        await _wrepository.InsertManyAsync(WholeSales, autoSave: true);
         }

    // Seed initial data for the Store aggregate root

      }
    }
}
