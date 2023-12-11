import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/registration/registration.component';
import { AboutComponent } from './pages/about/about.component';
import { DiscographyComponent } from './pages/discography/discography.component';
import { GearComponent } from './pages/gear/gear.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'sale',
    component: SaleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'discography',
    component: DiscographyComponent,
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
  },
  {
    path: 'gear',
    component: GearComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
