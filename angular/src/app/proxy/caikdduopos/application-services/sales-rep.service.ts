import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { SalesRepDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class SalesRepService {
  apiName = 'Default';
  

  create = (input: SalesRepDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesRepDto>({
      method: 'POST',
      url: '/api/app/sales-rep',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sales-rep/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesRepDto>({
      method: 'GET',
      url: `/api/app/sales-rep/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SalesRepDto>>({
      method: 'GET',
      url: '/api/app/sales-rep',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: SalesRepDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesRepDto>({
      method: 'PUT',
      url: `/api/app/sales-rep/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
