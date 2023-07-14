import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  formdata:any;
  products:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.load();
  }

  load() {
    this.formdata = new FormGroup({
      name: new FormControl("")
    })

    this.api.get("products").subscribe((result: any) => {
      this.products = result;
    })
  }

  save(data: any) {
    this.api.post("products", data).subscribe((result: any) => {
      this.products = result;
      this.load();
    })
  }
}
