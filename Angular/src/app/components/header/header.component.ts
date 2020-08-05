import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit{

  houseDefined: boolean = false;
  routingName:string;


  constructor(
    private activatedRoute:ActivatedRoute,
    // private route:Router,
    // private paramMap:ParamMap
  ) { }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.name);
      this.routingName = params['name'];
    });
  }
}
