import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import {LoggingService} from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  //service=new LoggingService();
  constructor(private loggingService:LoggingService,private accountService:AccountsService) { }

 

  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
   
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }

}
