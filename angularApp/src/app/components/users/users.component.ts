import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor() { }

  ngOnInit() {
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
    ]
  
    this.addUser({
      firstName: 'David',
      lastName: 'Billy',
      age: 49,
      address: {
        street: '012 west street',
        city: 'Corona',
        state: 'CA'
      },
      hasKids: true
    });
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
