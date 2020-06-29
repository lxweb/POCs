import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../../common/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent {

  @Output() propagateCreateNewPost = new EventEmitter<Post>();
  constructor() { }

  createNewPost(title:string, body:string):void{
    let id:number = 0;
    let userId:number= 0;
    this.propagateCreateNewPost.emit({id, userId, title, body});
  }
}
