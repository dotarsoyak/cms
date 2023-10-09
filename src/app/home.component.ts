import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from './models/post';
import { PostService } from './services/post.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: IPost[] | undefined;
  sub!: Subscription;

  constructor(private postService: PostService){}
  
  ngOnInit(): void {
    this.sub = this.postService.getPosts().subscribe({
      next: posts => this.posts = posts
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
