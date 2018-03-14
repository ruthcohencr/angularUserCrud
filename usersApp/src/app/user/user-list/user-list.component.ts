import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() deleteUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
 
  }

  getUsers(){
    
  }

  delete(user: User){
    this.deleteUserEvent.emit(user);
  }
}
