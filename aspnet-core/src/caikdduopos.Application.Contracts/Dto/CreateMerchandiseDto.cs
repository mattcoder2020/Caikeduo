using caikdduopos.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class CreateMerchandiseDto
    {
        [Required]
        [StringLength(20)]
        public string Name { get; set; }

        [Required]
        public SalesDto Sales { get; set; }

    }
}