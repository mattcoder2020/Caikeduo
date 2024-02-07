using caikdduopos.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto.Create
{
    public class CreateMerchandiseSalesDto
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }

        [Required]
        public CreateSalesDto Sales { get; set; }
        public int SalesRepId { get; set; }

    }
}