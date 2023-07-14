import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // fieldArray: Array<any> = [];
  // newAttribute: any = {};
  // formdata: any;
  // result: any;
  // products: any;
  // quantity: any;
  // price: any;
  // saleid: any;
  // saledetails: any;
  // productid: any;
  // clients: any;

  formdata:any;
  results:any;
  clients: any;
  products: any;
  saledetails = new Array();
  total=0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
    this.add(1);

  }

  load() {
    this.api.get("sales/client").subscribe((result: any) => {
      this.results = result;
      console.log(result);
    })
    this.api.get("products").subscribe((result: any) => {
      this.products = result;
    })
    this.api.get("clients").subscribe((result: any) => {
      this.clients = result;
    })

    this.formdata = new FormGroup({
      id:new FormControl(0),
      clientid: new FormControl(0),
      billamount:new FormControl(0)
    })
  }

  save(data: any) {
    data["saledetails"] = this.saledetails
    console.log(data);
    this.api.post("sales",data).subscribe((result:any)=>{
      console.log(result);
    })

   this.load();

  }


  add(count: number) {
    this.saledetails.push({
      id:0,
      productid:0,
      quantity:0,
      price:0,
      total:0
    })
    console.log(this.saledetails);
  }

  valueChanged(i:number){
    this.saledetails[i].total = this.saledetails[i].quantity * this.saledetails[i].price;
    let total = 0;
    this.saledetails.forEach(detail => {
      total += detail.total;
    });

    this.formdata.patchValue({
      billamount:total
    })
  }


  deleteFieldValue(i: any) {
    this.saledetails.splice(i, 1);
    this.valueChanged(i);
  }
}
