import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SnackBarAnnotatedComponent } from '../material/snackbar/snack-bar-annotated.component';
import { PageNotFoundComponent } from '../page-not-found.component';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  declarations:[
    PageNotFoundComponent,
    SnackBarAnnotatedComponent
  ],
  exports: [
    PageNotFoundComponent,
    SnackBarAnnotatedComponent
  ]
})
export class SharedModule { }
