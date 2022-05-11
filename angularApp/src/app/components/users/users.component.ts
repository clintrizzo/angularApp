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
  currentClasses = {};

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
          hasKids: true,
          image: 'https://source.unsplash.com/random/600x600/?img=1',
          isActive: true
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
          hasKids: true,
          image: 'https://source.unsplash.com/random/600x600/?portrait',
          isActive: false

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
          hasKids: false,
          image: 'https://source.unsplash.com/random/600x600/?img=2',
          isActive: true
        },
      ];
      this.loaded = true;
      this.showExtended = true;
      this.setCurrentClasses()
    }, 2000);
  };
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  };
};
