import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  formdata: any;
  clients: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.load();
  }

  load() {
    this.formdata = new FormGroup({
      name: new FormControl("")
    })

    this.api.get("clients").subscribe((result: any) => {
      this.clients = result;
    })
  }

  save(data: any) {
    this.api.post("clients", data).subscribe((result: any) => {
      this.clients = result;
      this.load();
    })
  }
}
