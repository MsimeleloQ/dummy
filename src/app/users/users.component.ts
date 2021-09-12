import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id: any;
  users: any;

  constructor(private _route: ActivatedRoute, private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get('http://localhost:3000/users/' + this.id).subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, (error) => {
      console.log(error);
    })
  }

  deleteUser() {
    this._httpClient.delete('http://localhost:3000/users/' + this.id).subscribe(result => {
      alert("User Deleted successfully.");
      console.log(result);
      this._router.navigate(['/admin-page']);
    }, (error) => {
      console.log(error);
    });
  }

}
