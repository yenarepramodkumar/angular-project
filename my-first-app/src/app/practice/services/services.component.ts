import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../services/accounts.service'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[]
})
export class ServicesComponent implements OnInit {
  accounts:{name:string,status:string}[]=[];
  constructor(private accountService:AccountsService){

  }
  ngOnInit(){
    this.accounts=this.accountService.accounts;
  }
  
 
}
