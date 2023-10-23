import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SnackBarAnnotatedComponent } from '../material/snackbar/snack-bar-annotated.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { TruncateTextPipe } from '../pipes/truncate-text.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations:[
    PageNotFoundComponent,
    SnackBarAnnotatedComponent,
    TruncateTextPipe
  ],
  exports: [
    MaterialModule,
    PageNotFoundComponent,
    SnackBarAnnotatedComponent,
    TruncateTextPipe
  ]
})
export class SharedModule { }
