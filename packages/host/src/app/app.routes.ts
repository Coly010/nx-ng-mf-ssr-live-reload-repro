import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ozon',
    loadChildren: () => import('ozon/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'demo',
    loadChildren: () => import('demo/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
