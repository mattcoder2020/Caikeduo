using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class ProductDto: AuditedEntityDto<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double Cost { get; set; }
        public string Description { get; set; }
        public ProductTypeDto ProductType { get; set; }
    }
}
