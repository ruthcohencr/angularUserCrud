import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1,"First","Last","Email.email.com"),
    new User(2,"First","Last","Email.email.com"),
    new User(3,"First","Last","Email.email.com"),
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.getUsers();
  }

  getUsers(){
    //this.userService.getUsers().then(users => this.users = users);
  }

  create(user: User){
    this.users.push(user);
  }

  delete(user: User){
    const index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  update(users: any){
    console.log(users);
    const index = this.users.indexOf(users.original);
    this.users[index] = users.edited;
  }
}
