import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ObsHomeComponent implements OnInit,OnDestroy {

  private firstObsSubscription:Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription=interval(1000).subscribe(c=>{
    //   console.log(c);
    // })
    const customIntervalObservable=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count===2){
          observer.complete();
        }
        if(count>3){
          observer.error(new Error('Count is greater than three'));
          ;
        }
        count++;
      },1000);
    });

    this.firstObsSubscription=customIntervalObservable.pipe(filter(data=>{
      return data>0;
    }),map((data:number)=>{
      return 'Round : ' + (data+1);
    })).subscribe(data=>{
      console.log(data);
    },
      err=>{
        console.log(err);
        alert(err.message);
      },
      ()=>{
        console.log('Completed');
      }
   )

  }
  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
    
  }

}
