import { Environment } from '@abp/ng.core';

const baseUrl = 'https://172.17.0.1:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'AccessManagment',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://172.17.0.1:44357/',
    redirectUri: baseUrl,
    clientId: 'AccessManagment_App',
    responseType: 'code',
    scope: 'offline_access AccessManagment',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'backend',
      rootNamespace: 'AbpSampleApp.AccessManagment',
    },
  },
} as Environment;
