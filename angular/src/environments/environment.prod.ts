import { Environment } from '@abp/ng.core';

const baseUrl = 'https://localhost:44357';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Caikeduo',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357/',
    redirectUri: baseUrl,
    clientId: 'Caikeduo',
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
