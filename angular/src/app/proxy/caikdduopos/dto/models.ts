import type { AuditedEntityDto } from '@abp/ng.core';
import type { CreateProductDto } from './create/models';
import type { StoreStatus } from '../enums/store-status.enum';

export interface CashierDto extends AuditedEntityDto<number> {
  id: number;
  name?: string;
}

export interface CreateMerchandiseDto {
  name: string;
  sales: SalesDto;
}

export interface MemberDto extends AuditedEntityDto<number> {
  id?: number;
  name?: string;
  password?: string;
  address?: string;
  discount: number;
  phoneNumber?: string;
  birthDate: any;
  expiryDate: any;
}

export interface MerchandiseSalesDto extends AuditedEntityDto<string> {
  salesId?: string;
  cashier: CashierDto;
  salesRep: SalesRepDto;
  product: CreateProductDto;
  sales: SalesDto;
}

export interface PaymentMethodDto extends AuditedEntityDto<number> {
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

export interface SalesDto extends AuditedEntityDto<string> {
  id?: string;
  amount: number;
  member: MemberDto;
  salesType: SalesTypeDto;
  paymentMethod: PaymentMethodDto;
  salesTypeId: number;
  paymentMethodId: number;
  memberId: number;
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
