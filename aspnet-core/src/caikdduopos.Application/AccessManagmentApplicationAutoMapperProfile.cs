using caikdduopos.AggregateRoots;
using caikdduopos.Dto;
using AutoMapper;
using caikdduopos.Entity;
using caikdduopos.Dto.Create;

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
        //i want to map one source property to multiple destine properties
        //CreateMap<Product, ProductDto>().ForMember(x => x.ProductTypeName, opt => opt.MapFrom(src => src.ProductType.Name));
        CreateMap<Product, ProductDto>();
        CreateMap<Product, CreateProductDto>();
        CreateMap<CreateProductDto, Product>();
        CreateMap<ProductType, ProductTypeDto>();
        CreateMap<ProductTypeDto, ProductType>();
        CreateMap<Member, MemberDto>();
        CreateMap<MemberDto, Member>();
        CreateMap<Cashier, CashierDto>();
        CreateMap<CashierDto, Cashier>();
        CreateMap<SalesRep, SalesRepDto>();
        CreateMap<SalesRepDto, SalesRep>();
        CreateMap<MerchandiseSales, MerchandiseSalesDto>();
        CreateMap<CreateMerchandiseSalesDto, MerchandiseSales>();
        CreateMap<Sales, CreateSalesDto>();
        CreateMap<CreateSalesDto, Sales>();
        CreateMap<Sales, SalesDto>();
        CreateMap<SalesDto, Sales>();

        CreateMap<SalesType, SalesTypeDto>();
        CreateMap<SalesTypeDto, SalesType>();

        CreateMap<PaymentMethod, PaymentMethodDto>();
        CreateMap<PaymentMethodDto, PaymentMethod>();



    }
}
