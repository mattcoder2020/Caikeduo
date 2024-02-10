import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { StoreStatus } from '../enums/store-status.enum';

export interface CashierDto extends AuditedEntityDto<number> {
  id: number;
  name?: string;
}

export interface MemberDto extends EntityDto<number> {
  id?: number;
  name?: string;
  password?: string;
  address?: string;
  discount: number;
  phoneNumber?: string;
  birthDate: any;
  expiryDate: any;
}

export interface MerchandiseSalesDto extends EntityDto<string> {
  salesId?: string;
  salesRep: SalesRepDto;
  sales: SalesDto;
}

export interface PaymentMethodDto extends EntityDto<number> {
  id?: number;
  name?: string;
  description?: string;
  isDefault: boolean;
}

export interface ProductDto extends AuditedEntityDto<number> {
  id?: number;
  name?: string;
  price: number;
  cost: number;
  description?: string;
  productType: ProductTypeDto;
}

export interface ProductTypeDto extends AuditedEntityDto<number> {
  id?: number;
  name?: string;
}

export interface SalesDto extends EntityDto<string> {
  amount: number;
  member: MemberDto;
  salesType: SalesTypeDto;
  paymentMethod: PaymentMethodDto;
  product: ProductDto;
  quantity: number;
  discount: number;
}

export interface SalesOverViewDto {
  salesType?: string;
  totalSales: number;
  totalOrder: number;
  averageAmount: number;
  salesByUnionPay: number;
  salesByWeChat: number;
  salesByAliPay: number;
  salesByCash: number;
}

export interface SalesRepDto extends AuditedEntityDto<number> {
  id?: number;
  name?: string;
}

export interface SalesTypeDto extends AuditedEntityDto<number> {
  id?: number;
  name?: string;
}

export interface StoreDto extends AuditedEntityDto<string> {
  id?: string;
  name?: string;
  fullName?: string;
  address?: string;
  phone?: string;
  status: StoreStatus;
  creationTime?: string;
}

export interface StoreQueryDTO {
  id?: string;
  name?: string;
  creationDateFrom?: string;
  creationDateTo?: string;
}

export interface WholeSalesDto extends EntityDto<string> {
  deliveryAddress?: string;
  deliveryMethod?: string;
  sales: SalesDto;
}
