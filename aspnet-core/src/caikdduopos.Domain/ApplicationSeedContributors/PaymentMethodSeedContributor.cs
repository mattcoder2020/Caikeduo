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
                Name = "Cash"
               },
               new PaymentMethod
               {
                Name = "UnionPay"
               },
               new PaymentMethod
               {
                Name = "WechatPay"
               },
               new PaymentMethod
               {
                Name = "Alipay"
               }

           
            // Add more store entries if needed
            };

            await _repository.InsertManyAsync(paymentmethods, autoSave: true);
        }
    }
}
