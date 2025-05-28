import { Routes } from '@angular/router';
import { ValorantComponent } from './pages/valorant/valorant.component';

export const routes: Routes = [
  {
    path: 'br/menu',
    component: ValorantComponent
  },
  {
    path: '',
    redirectTo: 'br/menu/catalog/valorant',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'br/menu/catalog/valorant'
  }
];
