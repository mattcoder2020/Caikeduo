import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ProductTypeDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  apiName = 'Default';
  

  create = (input: ProductTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTypeDto>({
      method: 'POST',
      url: '/api/app/product-type',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTypeDto>({
      method: 'GET',
      url: `/api/app/product-type/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ProductTypeDto>>({
      method: 'GET',
      url: '/api/app/product-type',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: ProductTypeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTypeDto>({
      method: 'PUT',
      url: `/api/app/product-type/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
