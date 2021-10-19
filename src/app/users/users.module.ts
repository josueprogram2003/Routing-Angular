import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';
import { UsersComponent } from './presentation/views/users/users.component';

const routes: Routes=[
  {
path: 'list', component:PageUsersComponent
  }
]

@NgModule({
  declarations: [
    PageUsersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    PageUsersComponent
  ]
})
export class UsersModule { }
