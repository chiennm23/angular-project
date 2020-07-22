import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  listuser = 'List User';
  users: IUser [] = [
    {
      id: 1,
      name: 'luong',
      email: 'luong@gmail.com',
      address: 'HN',
    },
    {
      id: 2,
      name: 'minh',
      email: 'minh@gmail.com',
      address: 'HN',
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gmail.com',
      address: 'HN',
    },
  ];
  // tslint:disable-next-line:variable-name
  user_search = [];

  ngOnInit(): void {
    this.user_search = this.users;
  }

  // tslint:disable-next-line:typedef
  userfilter(keyword: string)
  {
    // tslint:disable-next-line:only-arrow-functions typedef
    return this.users.filter(function(user) {
      // tslint:disable-next-line:triple-equals
        return user.name.indexOf(keyword) != -1;
    });
  }

  // tslint:disable-next-line:typedef
  search(event)
  {
    let keyword = event.target.value;
    this.user_search = keyword ? this.userfilter(keyword) : this.users;
  }
}
