import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact: User = new User();

  contactMe() {
    alert('Thanks for contacting with us. We will revert back to you super soon.')
    console.log(this.contact);
    this.resetAll();
  }

  resetAll() {
    this.contact = new User();
  }
}
