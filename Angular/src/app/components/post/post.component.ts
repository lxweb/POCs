import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

  mostrarId(id: number){
    console.log(id);
  }
}