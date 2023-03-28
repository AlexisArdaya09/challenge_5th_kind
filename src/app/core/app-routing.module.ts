import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'phones',
  },
  {
    path: 'phones',
    loadChildren: () =>
      import('../modules/phone/phone.module').then((m) => m.PhoneModule),
  },
  { path: '**', redirectTo: 'user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
