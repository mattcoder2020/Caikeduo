import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateStoreDto, StoreDto, StoreQueryDto } from '@proxy/caikdduopos/dto/models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  apiName = 'Default';
  
  covertStoreDto = (storedto: StoreDto ) =>
  {
       let dto= {} as CreateStoreDto;
       dto.address = storedto.address;
       dto.creationDate = storedto.creationTime;
       dto.fullName = storedto.fullName;
       dto.name = storedto.name;
       dto.phone = storedto.phone
       dto.status = storedto.status;
       return dto;

  };
  create = (input: CreateStoreDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'POST',
      url: '/api/app/store',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/store/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'GET',
      url: `/api/app/store/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreDto>>({
      method: 'GET',
      url: '/api/app/store',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  queryByFiltrationByQ = (q: StoreQueryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StoreDto>>({
      method: 'POST',
      url: '/api/app/store/query-by-filtration',
      body: q,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateStoreDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StoreDto>({
      method: 'PUT',
      url: `/api/app/store/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
