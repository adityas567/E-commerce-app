import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ISliderComponent } from './i-slider/i-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { TokenServiceService } from './token-interceptor/token-service.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    PageComponent,
    ISliderComponent,
    CardSliderComponent,
    CategoryComponent,
    ProductPageComponent,
    LoginComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenServiceService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
