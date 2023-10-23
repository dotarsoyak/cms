import { Component, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAuthenticated=false;

  currentUser:User = {
    id:0,name:"",password:"",error:""
  };

  constructor(public authService:AuthService, private router:Router){}

  login(formValues:any):void{
      console.log(formValues);
      this.currentUser = this.authService.loginUser(formValues.name, formValues.password);

      if(this.authService.isAuthenticated()){
          this.router.navigate(['/home']);
      };
  }

}
