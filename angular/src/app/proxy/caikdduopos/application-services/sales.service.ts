import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { SalesDto, SalesOverViewDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  apiName = 'Default';
  

  create = (input: SalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesDto>({
      method: 'POST',
      url: '/api/app/sales',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesDto>({
      method: 'GET',
      url: `/api/app/sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SalesDto>>({
      method: 'GET',
      url: '/api/app/sales',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSalesOverView = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesOverViewDto[]>({
      method: 'GET',
      url: '/api/app/sales/sales-over-view',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: SalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalesDto>({
      method: 'PUT',
      url: `/api/app/sales/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
