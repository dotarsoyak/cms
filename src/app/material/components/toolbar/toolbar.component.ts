import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'cms-toolbar',
    styleUrls: ['./toolbar.component.scss'],
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent{
    @Output() toggleSideNav = new EventEmitter<void>();
}
