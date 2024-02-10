using caikdduopos.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto.Create
{
    public class CreateWholeSalesDto
    {
        public CreateSalesDto Sales { get; set; }
        public Guid SalesId { get; set; }
        public String DeliveryAddress { get; set; }
        public String DeliveryMethod { get; set; }


    }
}