import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPhoneComponent } from './add-edit-phone/add-edit-phone.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPhoneComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ListPhoneComponent,
    AddEditPhoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class PhoneModule { }
