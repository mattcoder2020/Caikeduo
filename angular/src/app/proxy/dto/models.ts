import type { StoreStatus } from '../enums/store-status.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateStoreDto {
  name: string;
  fullName: string;
  address: string;
  phone: string;
  status: StoreStatus;
  creationTime?: string;
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

export interface StoreQueryDto {
  creationDateFrom: string;
  creationDateTo: string;
  id?: string;
  name?: string;
 // creationDate?: string;
}
