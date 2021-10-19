import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageDashboardComponent } from './dashboard/presentation/pages/page-dashboard/page-dashboard.component';
import { PagesProductComponent } from './products/presentation/pages/pages-product/pages-product.component';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

const routes : Routes = [
  {
    path: '',component:PageLoginComponent
  },
  {
    path:'users', loadChildren: ()=> import('./users/users.module').then(m=> m.UsersModule)
  },
   {
    path:'products', component: PagesProductComponent,
    children:[
      
    ]
  },
    {
    path:'dashboard', component: PageDashboardComponent
  },
  {path:'**',redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,DashboardModule,ProductsModule,UsersModule,
    RouterModule.forRoot(routes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
