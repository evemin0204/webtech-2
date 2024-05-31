import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BalanceComponent } from './home/balance/balance.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './home/wallet/wallet.component';
import { TransactionsComponent } from './home/transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from "./home/form/form.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './home/services/token.interceptor';
import { EditformComponent } from './home/editform/editform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BalanceComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent,
    WalletComponent,
    TransactionsComponent,
    FormComponent,
    EditformComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
