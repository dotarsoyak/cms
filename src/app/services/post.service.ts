import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { BehaviorSubject, NotFoundError, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //postUrl:string='https://springboot-blog-api-cd884f5aea0c.herokuapp.com';
  postUrl:string='api/posts/posts.json';
  private _posts: BehaviorSubject<Post[]>;

  private dataStore: {
    posts: Post[]
  } = {
    posts: []
  };

  constructor(private http: HttpClient) { 
    this._posts = new BehaviorSubject<Post[]>([]);
  }

  get posts():Observable<Post[]>{
    return this._posts.asObservable();
  }

  loadAll(){
    this.http.get<Post[]>(this.postUrl)
    .subscribe(
      data => {
        this.dataStore.posts = data;
        this._posts.next(Object.assign({}, this.dataStore).posts);
      },
      error => {catchError(this.handleError)}
    );
  }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.postUrl}`)
    .pipe(
      //tap(item => console.log(`post recuperados ${item}`)),
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

  getPostById(postId:number):Observable<Post | undefined>{
    //TODO: Hacer método getPostById en servicio java
    let filteredPost: Post | undefined;
    let founded=false;
    return this.getPosts()
    .pipe(
      map(data => {
        data.forEach(item => {
          if(item.id == postId){
            filteredPost = item;
            founded = true;
          }
        });
        
        return founded ? filteredPost : undefined;
      })
    );
  }

}
