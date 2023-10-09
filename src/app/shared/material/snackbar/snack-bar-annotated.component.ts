import {Component, Input} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

/**
 * @title Snack-bar with an annotated custom component
 */
@Component({
  selector: 'cms-snack-bar-annotated-component',
  template: `
    <button mat-stroked-button (click)="openSnackBar()" aria-label="Launch snackbar">
    Launch Snackbar
    </button>
    `
})
export class SnackBarAnnotatedComponent {
    @Input() message:string = "Hi, I'm an Snackbar, you need to set my message property.";
    durationInSeconds:number = 2;
    config: MatSnackBarConfig<number> = new MatSnackBarConfig<number>();

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this.config.duration = this.durationInSeconds * 1000;
    this._snackBar.open(
        this.message, 
        "Dance", this.config
  );
  }
}
