using caikdduopos.Entity;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationSeedContributors
{
    public class SalesTypeSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<SalesType, int> _repository;

        public SalesTypeSeedContributor(IRepository<SalesType, int> repository)
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
            var SalesTypes = new[]
            {
               new SalesType
               {
                Name = "Merchandise"
               },
               new SalesType
               {
                Name = "Credit"
               },
               new SalesType
               {
                Name = "Coupon"
               },
                    
            // Add more store entries if needed
            };

            await _repository.InsertManyAsync(SalesTypes, autoSave: true);
        }
    }
}
