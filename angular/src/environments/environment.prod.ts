import { Environment } from '@abp/ng.core';

const baseUrl = 'https://119.23.216.60:44357/';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AccessManagment',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://119.23.216.60:44357/',
    redirectUri: baseUrl,
    clientId: 'AccessManagment_Web',
    responseType: 'code',
    scope: 'offline_access AccessManagment',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://119.23.216.60:44357/',
      rootNamespace: 'AbpSampleApp.AccessManagment',
    },
  },
} as Environment;
