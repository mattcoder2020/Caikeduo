import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateMerchandiseSalesDto } from '../dto/create/models';
import type { MerchandiseSalesDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseSalesService {
  apiName = 'Default';
  

  create = (input: CreateMerchandiseSalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MerchandiseSalesDto>({
      method: 'POST',
      url: '/api/app/merchandise-sales',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/merchandise-sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MerchandiseSalesDto>({
      method: 'GET',
      url: `/api/app/merchandise-sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MerchandiseSalesDto>>({
      method: 'GET',
      url: '/api/app/merchandise-sales',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMerchandiseSalesWithDetail = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MerchandiseSalesDto>>({
      method: 'GET',
      url: '/api/app/merchandise-sales/merchandise-sales-with-detail',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateMerchandiseSalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MerchandiseSalesDto>({
      method: 'PUT',
      url: `/api/app/merchandise-sales/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
