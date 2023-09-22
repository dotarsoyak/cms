import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl:string='api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error ocurred: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status},  error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return  throwError(()=>errorMessage);
  }
}
