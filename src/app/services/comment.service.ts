import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  //commentUrl:string='https://springboot-blog-api-cd884f5aea0c.herokuapp.com';
  commentUrl:string='api/comments/comments.json';

  constructor(private http: HttpClient) { }

  getComments():Observable<Comment[]>{
    //TODO: Limitar la cantidad de comentarios a enviar.
    return this.http.get<Comment[]>(this.commentUrl)
    .pipe(
      //tap(item => console.log(`comments recuperados ${JSON.stringify(item)}`)),
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
