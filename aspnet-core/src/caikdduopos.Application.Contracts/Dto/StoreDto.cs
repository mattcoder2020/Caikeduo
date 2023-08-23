﻿using caikdduopos.Enums;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace caikdduopos.Dto
{
    public class StoreDto:AuditedEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public StoreStatus Status { get; set; }
        public DateTime CreationTime { get; set; }


    }
}
