import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {

  private acivatedSub:Subscription;
  userActivated=false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.acivatedSub=this.userService.activated.subscribe(didActivate=>{
      this.userActivated=didActivate;
    })
  }
  ngOnDestroy(){
    this.acivatedSub.unsubscribe();
  }

}
