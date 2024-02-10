import type { StoreStatus } from '../../enums/store-status.enum';

export interface CreateMerchandiseSalesDto {
  sales: CreateSalesDto;
  salesRepId: number;
  salesId?: string;
}

export interface CreateProductDto {
  name?: string;
  price: number;
  cost: number;
  description?: string;
  productTypeId: number;
}

export interface CreateSalesDto {
  id?: string;
  amount: number;
  quantity: number;
  discount: number;
  salesTypeId: number;
  paymentMethodId: number;
  memberId: number;
  productId: number;
}

export interface CreateStoreDto {
  name: string;
  fullName: string;
  address: string;
  phone: string;
  status: StoreStatus;
  creationDate?: string;
}

export interface CreateWholeSalesDto {
  sales: CreateSalesDto;
  salesId?: string;
  deliveryAddress?: string;
  deliveryMethod?: string;
}
