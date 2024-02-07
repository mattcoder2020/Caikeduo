using caikdduopos.Entity;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationSeedContributors
{
    public class MemberSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Member, int> _repository;

        public MemberSeedContributor(IRepository<Member, int> repository)
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
            var members = new[]
            {
               new Member
               {
                Name = "David F",
                Address = "1234 Main St",
                BirthDate = new System.DateOnly(2000, 4,4),
                Discount = 0,
                ExpiryDate = new System.DateOnly(2022, 4,4),
                Password ="1234",
                PhoneNumber = "1234567890"
               },
               new Member
               {
                Name = "Alfred Z",
                Address = "1234 Main St",
                BirthDate = new System.DateOnly(2000, 4,4),
                Discount = 0,
                ExpiryDate = new System.DateOnly(2022, 4,4),
                Password ="1234",
                PhoneNumber = "1234567890"
               },
               new Member
               {
                Name = "Peter S",
                Address = "1234 Main St",
                BirthDate = new System.DateOnly(2000, 4,4),
                Discount = 0,
                ExpiryDate = new System.DateOnly(2022, 4,4),
                Password ="1234",
                PhoneNumber = "1234567890"
               },
               new Member
               {
                Name = "Andrew Y",
                Address = "1234 Main St",
                BirthDate = new System.DateOnly(2000, 4,4),
                Discount = 0,
                ExpiryDate = new System.DateOnly(2022, 4,4),
                Password ="1234",
                PhoneNumber = "1234567890"
               }

           
            // Add more store entries if needed
            };

            await _repository.InsertManyAsync(members, autoSave: true);
        }
    }
}
