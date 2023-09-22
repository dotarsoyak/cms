import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HorizontalCardComponent } from './shared/partials/cards/horizontal-card.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'login', component: LoginComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component: PageNotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    LoginComponent,
    HorizontalCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
