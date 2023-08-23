import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetIdentityUsersInput, IdentityRoleDto, IdentityUser, IdentityUserCreateDto, IdentityUserDto, IdentityUserUpdateDto, IdentityUserUpdateRolesDto } from '../volo/abp/identity/models';

@Injectable({
  providedIn: 'root',
})
export class MyIdentityUserService {
  apiName = 'Default';
  

  create = (input: IdentityUserCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: '/api/app/my-identity-user',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/my-identity-user/${id}`,
    },
    { apiName: this.apiName,...config });
  

  findByDateRangeByFromAndTo = (from: string, to: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUser[]>({
      method: 'POST',
      url: '/api/app/my-identity-user/find-by-date-range',
      params: { from, to },
    },
    { apiName: this.apiName,...config });
  

  findByEmail = (email: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: '/api/app/my-identity-user/find-by-email',
      params: { email },
    },
    { apiName: this.apiName,...config });
  

  findByUsername = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: '/api/app/my-identity-user/find-by-username',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: `/api/app/my-identity-user/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAssignableRoles = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: '/api/app/my-identity-user/assignable-roles',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetIdentityUsersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<IdentityUserDto>>({
      method: 'GET',
      url: '/api/app/my-identity-user',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getRoles = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: `/api/app/my-identity-user/${id}/roles`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: IdentityUserUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'PUT',
      url: `/api/app/my-identity-user/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateRoles = (id: string, input: IdentityUserUpdateRolesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/my-identity-user/${id}/roles`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
