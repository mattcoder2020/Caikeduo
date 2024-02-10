import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateWholeSalesDto } from '../dto/create/models';
import type { WholeSalesDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class WholeSalesService {
  apiName = 'Default';
  

  create = (input: CreateWholeSalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WholeSalesDto>({
      method: 'POST',
      url: '/api/app/whole-sales',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/whole-sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WholeSalesDto>({
      method: 'GET',
      url: `/api/app/whole-sales/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WholeSalesDto>>({
      method: 'GET',
      url: '/api/app/whole-sales',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getWholeSalesWithDetail = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WholeSalesDto>>({
      method: 'GET',
      url: '/api/app/whole-sales/whole-sales-with-detail',
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateWholeSalesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WholeSalesDto>({
      method: 'PUT',
      url: `/api/app/whole-sales/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
