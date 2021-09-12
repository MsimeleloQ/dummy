import { AddProductComponent } from './add-product/add-product.component';
import { UsersComponent } from './users/users.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart/:id', component: CartComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'users/:id', component: UsersComponent },
  { path: 'add-product', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
