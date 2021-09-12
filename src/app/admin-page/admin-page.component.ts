import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  userList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/users').subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    }, (error) => {
      console.log(error);
    })
  }

}
