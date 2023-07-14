import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-saledetails',
  templateUrl: './saledetails.component.html',
  styleUrls: ['./saledetails.component.css']
})
export class SaledetailsComponent implements OnInit {

  saleid: any;
  clientid: any;

  saledetails: any;
  client: any;
  sale:any;
  fileName= 'ExcelSheet.xlsx';

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.clientid = route.snapshot.paramMap.get('clientid');
    this.saleid = route.snapshot.paramMap.get('saleid');
  }

  ngOnInit(): void {
    this.api.get("sales/saledetail/" + this.saleid).subscribe((result: any) => {
      console.log(result);
      this.saledetails = result;
    })
    this.api.get("clients/" + this.clientid).subscribe((result: any) => {
      console.log(result);
      this.client = result;
    })
    this.api.get("sales/" + this.saleid).subscribe((result: any) => {
      this.sale = result;
    })
  }

  print(printtable:string){
    let printContents = document.getElementById(printtable)?.innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents!;

     window.print();

     document.body.innerHTML = originalContents;
  }
  excel(){
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
