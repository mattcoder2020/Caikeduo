import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AccessManagment',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://localhost:44357/',
    redirectUri: baseUrl,
    clientId: 'AccessManagment_App',
    responseType: 'code',
    scope: 'offline_access AccessManagment',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'http://localhost:44357',
      rootNamespace: 'AbpSampleApp.AccessManagment',
    },
  },
} as Environment;
