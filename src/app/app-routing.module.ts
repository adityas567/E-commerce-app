import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: 'all_product', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'products/:id', component: ProductPageComponent },
  { path:'category/:category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
