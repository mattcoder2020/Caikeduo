using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto.Create
{
    public class CreateProductDto
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public double Cost { get; set; }
        public string Description { get; set; }
        public int ProductTypeId { get; set; }

    }
}
