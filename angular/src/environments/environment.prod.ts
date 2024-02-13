import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:44357';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AccessManagment',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357/',
    redirectUri: baseUrl,
    clientId: 'AccessManagment_Web',
    responseType: 'code',
    scope: 'offline_access AccessManagment',
    requireHttps: true,
  },
  apis: {
    default: {
      url: '',
      rootNamespace: 'AbpSampleApp.AccessManagment',
    },
  },
} as Environment;
