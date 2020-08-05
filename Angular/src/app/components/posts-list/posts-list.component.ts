import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/common/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.less']
})
export class PostsListComponent implements OnInit {

  posts:Post[];

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe( 
      (data) => {
        this.posts = <Post[]>data;
      } );
  }

  mostrarId(id:number){
    console.log(id);

  }

  
  createNewPost(event:Post){
    let newPost:Post = event;
    this.posts.push(newPost);
  }
}
