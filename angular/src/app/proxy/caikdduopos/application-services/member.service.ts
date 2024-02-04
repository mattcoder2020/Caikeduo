import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { MemberDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiName = 'Default';
  

  create = (input: MemberDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MemberDto>({
      method: 'POST',
      url: '/api/app/member',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/member/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MemberDto>({
      method: 'GET',
      url: `/api/app/member/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MemberDto>>({
      method: 'GET',
      url: '/api/app/member',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: MemberDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MemberDto>({
      method: 'PUT',
      url: `/api/app/member/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
