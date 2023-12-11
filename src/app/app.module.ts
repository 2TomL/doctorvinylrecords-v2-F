import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/registration/registration.component';
import { AboutComponent } from './pages/about/about.component';
import { DiscographyComponent } from './pages/discography/discography.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { GearComponent } from './pages/gear/gear.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    DiscographyComponent,
    AccessoriesComponent,
    GearComponent,
    ContactComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
