import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';


export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/allstores',
        name: '::Menu:stores',   
        iconClass: 'fas fa-store',
        order: 2,
        //requiredPolicy: 'StoreManagement.View',
        layout: eLayoutType.application,
      },
      {
        path: '/storelist',
        name: '::Menu:storelist',
        parentName: '::Menu:stores',
        iconClass: 'fas fa-store',
        layout: eLayoutType.application,
      }
      ,
      {
        path: '/allproduct',
        name: '::Menu:product',   
        iconClass: 'fas fa-server',
        order: 3,
        //requiredPolicy: 'StoreManagement.View',
        layout: eLayoutType.application,
      },
      {
        path: '/product/productlist',
        name: '::Menu:productlist',
        parentName: '::Menu:product',
        iconClass: 'fas fa-store',
        layout: eLayoutType.application,
      }
      ,
      {
        path: '/product/producttypelist',
        name: '::Menu:producttypelist',
        parentName: '::Menu:product',
        iconClass: 'fas fa-store',
        layout: eLayoutType.application,
      }
      ,
      {
        path: '',
        name: '::Menu:paymentmethod',   
        iconClass: 'fas fa-store',
        order: 4,
        //requiredPolicy: 'StoreManagement.View',
        layout: eLayoutType.application,
      },
      {
        path: '/paymentmethodlist',
        name: '::Menu:paymentmethodlist',
        parentName: '::Menu:paymentmethod',
        iconClass: 'fas fa-store',
        layout: eLayoutType.application,
      }
    ]);
    
  };
}
