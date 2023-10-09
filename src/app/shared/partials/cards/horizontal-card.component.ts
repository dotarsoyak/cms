import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'cms-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {

  @Input() posts: IPost[] | undefined;

}
