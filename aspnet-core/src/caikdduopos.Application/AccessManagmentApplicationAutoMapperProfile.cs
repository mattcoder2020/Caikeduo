using caikdduopos.AggregateRoots;
using caikdduopos.Dto;
using AutoMapper;
using caikdduopos.Entity;

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
        CreateMap<Product, ProductDto>();
        CreateMap<ProductDto, Product>();
        CreateMap<ProductType, ProductTypeDto>();
        CreateMap<ProductTypeDto, ProductType>();
        CreateMap<Member, MemberDto>();
        CreateMap<MemberDto, Member>();
        CreateMap<Cashier, CashierDto>();
        CreateMap<CashierDto, Cashier>();
        CreateMap<SalesRep, SalesRepDto>();
        CreateMap<SalesRepDto, SalesRep>();
        CreateMap<MerchandiseSales, MerchandiseSalesDto>();
        CreateMap<MerchandiseSalesDto, MerchandiseSales>();
        CreateMap<Sales, SalesDto>();
        CreateMap<SalesDto, Sales>();

        CreateMap<SalesType, SalesTypeDto>();
        CreateMap<SalesTypeDto, SalesType>();





    }
}
