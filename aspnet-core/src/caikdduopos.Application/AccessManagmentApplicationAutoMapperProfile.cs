﻿using caikdduopos.AggregateRoots;
using caikdduopos.Dto;
using AutoMapper;

namespace caikdduopos;

public class AccessManagmentApplicationAutoMapperProfile : Profile
{
    public AccessManagmentApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Store, StoreDto>();
        CreateMap<CreateStoreDto, Store>();
    }
}
