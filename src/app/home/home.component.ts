import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  salescount:any;
  productcount:any;
  clientcount:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
this.api.get("sales").subscribe((result:any)=>{
  this.salescount = result.length
})
this.api.get("products").subscribe((result:any)=>{
  this.productcount = result.length
})
this.api.get("clients").subscribe((result:any)=>{
  this.clientcount = result.length
})
  }

}
