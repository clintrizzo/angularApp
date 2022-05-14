import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { };

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          isActive: true,
          registered: new Date('01/02/2022 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          isActive: true,
          registered: new Date('03/11/2020 06:20:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,

          isActive: true,
          registered: new Date('11/02/2016 11:30:00')
        },
      ];
      this.loaded = true;
      this.showExtended = true;
    }, 2000);
  };

  addUser(user: User) {
    this.users.push(user);
  }
};
