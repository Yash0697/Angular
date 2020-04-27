import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustombgDirective } from './custombg.directive';
import { reverseString } from './reverseString.pipe';
import { MyServiceService } from './my-service.service';
import { JsonFileService } from './jsonfilehandling/json-file.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatSortModule} from '@angular/material';
import { EmployeeService } from './employee.service';
import { JsonfilehandlingComponent } from './jsonfilehandling/jsonfilehandling.component';
import { MovieappComponent } from './movieapp/movieapp.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductshomeComponent } from './productshome/productshome.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ProductspringComponent } from './productspring/productspring.component';
import { ProductspringService } from './productspring.service';

const routes : Routes = [
{ path: 'login', component: AccountsComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'products_home', component: ProductshomeComponent },
{ path: 'about', component: AboutComponent },
{path: 'empListAll', component:EmployeesComponent},
{path:'empListAll/:id', component:EmployeesComponent},
{path: 'ContactUs', component:ContactUsComponent},
{ path: 'moviesAll', component: MovieappComponent},
{ path: 'moviesAll/:genre', component: MovieappComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustombgDirective,
    reverseString,
    EmployeesComponent,
    ContactUsComponent,
    EmployeetableComponent,
    JsonfilehandlingComponent,
    MovieappComponent,
    AccountsComponent,
    NavbarComponent,
    FooterComponent,
    ProductshomeComponent,
    AboutComponent,
    SignupComponent,
    ProductspringComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [MyServiceService, EmployeeService, JsonFileService, ProductspringService],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
