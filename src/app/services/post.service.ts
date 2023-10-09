import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string='https://springboot-blog-api-cd884f5aea0c.herokuapp.com';

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.postUrl}/post/all`)
    .pipe(
      tap(item => console.log(`post recuperados ${item}`)),
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
