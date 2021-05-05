import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable()
export class AccountsService{

    constructor(private loggingService:LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);

      }
      updateAccount(id:number,status:string){
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status);

      }

}