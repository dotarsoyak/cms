import {  Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'cms-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss']
})
export class HorizontalCardComponent implements OnInit, OnDestroy {
  //posts: Post[] = [];
  posts: Observable<Post[]> | undefined;

  displayedColumns: string[] = ['posts'];
  dataSource!:MatTableDataSource<Post>;

  constructor(private postService: PostService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
  }
  
  ngOnInit(): void {
    /*this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.dataSource = new MatTableDataSource<Post>(data);
        this.dataSource.paginator = this.paginator;
      }
    });*/
    this.posts = this.postService.posts;
    this.postService.loadAll();
    this.posts.subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<Post>(data);
        this.dataSource.paginator = this.paginator;
      }
    })
  }
  
  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

  ngOnDestroy(): void {
  }


}
