using caikdduopos.Entity;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationSeedContributors
{
    public class PaymentMethodSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<PaymentMethod, int> _repository;

        public PaymentMethodSeedContributor(IRepository<PaymentMethod, int> repository)
        {
            _repository = repository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            //Check if the Store table is already populated
            if (await _repository.GetCountAsync() > 0)
            {
                return; // Data already seeded
            }



            // Seed initial data for the Store aggregate root
            var paymentmethods = new[]
            {
               new PaymentMethod
               {
                Name = "Cash",
                Description ="PayByCash"
               },
               new PaymentMethod
               {
                Name = "UnionPay",
                     Description ="PayByUnionPay"
               },
               new PaymentMethod
               {
                Name = "WechatPay",
                     Description ="PayByCash"
               },
               new PaymentMethod
               {
                Name = "Alipay",
                     Description ="PayByCash"
               }

           
            // Add more store entries if needed
            };

            await _repository.InsertManyAsync(paymentmethods, autoSave: true);
        }
    }
}
