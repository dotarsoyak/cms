import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'cms-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {

  @Input() products: IProduct[] | undefined;

}
