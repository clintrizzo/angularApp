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
  constructor() { };

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '123 north street',
            city: 'Corona',
            state: 'CA'
          },
          hasKids: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '456 south street',
            city: 'Corona',
            state: 'CA'
          },
          hasKids: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '789 east street',
            city: 'Corona',
            state: 'CA'
          },
          hasKids: false
        },
      ];
      this.loaded = true;
      this.showExtended = true;
    }, 2000)
  };

  addUser(user: User) {
    this.users.push(user)
  };
};
