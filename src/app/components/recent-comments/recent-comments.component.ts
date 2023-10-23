import { Component, OnDestroy, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'cms-recent-comments',
  templateUrl: './recent-comments.component.html',
  styleUrls: ['./recent-comments.component.scss']
})
export class RecentCommentsComponent implements OnInit, OnDestroy{
  //postUrl:string='https://springboot-blog-api-cd884f5aea0c.herokuapp.com';
  comments: Comment[] | undefined;

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(
      data => this.comments = data
    );
  }

  ngOnDestroy(): void {
    this.comments = undefined;
  }
  

}