import { Component, OnInit } from '@angular/core';
import { User } from '../entity/User';
@Component({
  selector: 'search-form',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  user:User=new User();
  users:User[] = [];
  constructor() {
  }

  ngOnInit() {
  }
  save() {
    this.users.push(this.user);
    this.user=new User();
  }
}