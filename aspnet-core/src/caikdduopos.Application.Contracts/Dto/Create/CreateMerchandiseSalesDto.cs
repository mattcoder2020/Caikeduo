﻿using caikdduopos.Enums;
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
        public CreateSalesDto Sales { get; set; }
        public int SalesRepId { get; set; }
        public Guid SalesId { get; set;}

    }
}