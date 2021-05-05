import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddenUserNames=['pramod','raju'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
        }),
       'gender':new FormControl('male'),
       'hobbies': new FormArray([])
    });
    this.signupForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUserNames.indexOf(control.value)){
      return {'nameIsForbidden':true}
    }
    return null;
  }
  forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='pramod@gmail.com'){
          resolve({'emailForbidden':true});
        }
        else{
          resolve(null);
        }
      },1000);
    });
    return promise;
  }

}
