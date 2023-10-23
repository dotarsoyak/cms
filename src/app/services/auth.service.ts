import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    currentUser:User = {
        id:-1,
        name:'',
        password:'',
        error:'No fue posible iniciar sesión.'
    };
    
    loginUser(userName:string, password:string):User{
        //this.currentUser=undefined;
        if(userName == 'demo' && password=='demo'){
            return this.currentUser = {
                id:1010,
                name:'Ulises',
                password:'Trujillo',
                error:''
            };
        }

        return this.currentUser = {
            id:-1,
            name:'',
            password:'',
            error:'No fue posible iniciar sesión.'
        };
    }

    isAuthenticated():boolean{
        return this.currentUser!.error.length == 0;
    }

}