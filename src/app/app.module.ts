import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HorizontalCardComponent } from './shared/partials/cards/horizontal-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { RecentCommentsComponent } from './components/recent-comments/recent-comments.component';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/modules/material.module';
import { SidenavComponent } from './material/components/sidenav/sidenav.component';
import { ToolbarComponent } from './material/components/toolbar/toolbar.component';
import { PostDetailGuard } from './components/post-detail/post-detail.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'post/:id', canActivate:[PostDetailGuard], component: PostDetailComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SharedModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    HorizontalCardComponent,
    ToolbarComponent,
    SidenavComponent,
    PostDetailComponent,
    RecentCommentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
