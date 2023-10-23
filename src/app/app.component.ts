import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'app';
  private dt = new Date();
  year = this.dt.getUTCFullYear();

  ngOnDestroy(): void {
    this.year = 0;
  }
  
}
