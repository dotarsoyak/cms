import { NgModule } from '@angular/core';
import { NavbarComponent } from '../material/navbar.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  declarations:[
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
