import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorantComponent } from './pages/valorant/valorant.component';

const routes: Routes = [
  { path: 'br/menu/catalog/valorant', component: ValorantComponent },
  // adicione outras rotas conforme seu projeto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}