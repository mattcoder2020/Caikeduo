import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CashierDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  apiName = 'Default';
  

  create = (input: CashierDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CashierDto>({
      method: 'POST',
      url: '/api/app/cashier',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/cashier/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CashierDto>({
      method: 'GET',
      url: `/api/app/cashier/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CashierDto>>({
      method: 'GET',
      url: '/api/app/cashier',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: CashierDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CashierDto>({
      method: 'PUT',
      url: `/api/app/cashier/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
