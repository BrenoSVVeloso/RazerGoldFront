import { Routes } from '@angular/router';
import { ValorantComponent } from './pages/valorant/valorant.component';
import { VitorPadrinhoComponent } from './pages/valorant/vitor-padrinho.component';

export const routes: Routes = [
  {
    path: 'br/menu/catalog/valorant',
    component: ValorantComponent
  },
  {
    path:'br/menu/vitor-padrinho',
    component: VitorPadrinhoComponent
  },
  
  {
    path: '',
    redirectTo: 'br/menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'br/menu'
  }
];
