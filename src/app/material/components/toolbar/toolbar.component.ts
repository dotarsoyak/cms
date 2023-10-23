import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'cms-toolbar',
    styleUrls: ['./toolbar.component.scss'],
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent{
    @Output() toggleSideNav = new EventEmitter<void>();

    constructor(public auth:AuthService){}

}
