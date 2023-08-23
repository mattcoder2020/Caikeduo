using System;

namespace caikdduopos.Dto
{
    public class StoreQueryDTO
    {
        public Guid? Id { get; set; }
        public string? Name { get; set; }
        public DateTime? creationDateFrom { get; set; }
        public DateTime? creationDateTo { get; set; }
    }
}
