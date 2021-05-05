import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import {UserService} from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ObsUserComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute,private userService:UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  onActivate(){
    this.userService.activated.next(true);
  }
}
