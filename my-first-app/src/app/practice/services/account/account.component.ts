import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import {LoggingService} from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[]
})
export class AccountComponent implements OnInit {
  //service=new LoggingService();
  constructor(private loggingService:LoggingService,private accountService:AccountsService) { }
  
  ngOnInit(): void {
  }
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    //console.log('A server status changed, new status: ' + status);
    this.accountService.updateAccount(this.id,status);
//    this.loggingService.logStatusChange(status);
  }
}
