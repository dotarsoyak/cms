import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'cms-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit{
  post: Post | undefined;

  constructor(private route: ActivatedRoute
    ,private postService: PostService
    ,private router: Router){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = Number(routeParams.get("id"));
    this.postService.getPostById(postId).subscribe(
      data => {
        this.post = data
        if(this.post == undefined){
          alert(`El post que buscas no existe.`)
          this.router.navigate(['/home']);
        }
      }
    );
  }

}
