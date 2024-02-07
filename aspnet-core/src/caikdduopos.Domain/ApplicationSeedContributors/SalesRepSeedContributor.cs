using caikdduopos.Entity;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationSeedContributors
{
    public class SalesRepSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<SalesRep, int> _repository;

        public SalesRepSeedContributor(IRepository<SalesRep, int> repository)
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
            var salesrep = new[]
            {
               new SalesRep
               {
                Name = "Wendy Liu"
               },
               new SalesRep
               {
                Name = "Dave Chen"
               },
               new SalesRep
               {
                Name = "Norman Sun"
               },
               new SalesRep
               {
                Name = "Matt Yang"
               }

           
            // Add more store entries if needed
            };

            await _repository.InsertManyAsync(salesrep, autoSave: true);
        }
    }
}
