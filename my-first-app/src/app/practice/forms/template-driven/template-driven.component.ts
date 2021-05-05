import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent{
  @ViewChild('f') signUpform:NgForm;
  defaultQuestion='pet';
  answer:'';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted=false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpform.setValue({
    //   userData:{
    //     name:suggestedName,
    //     email:''
    //   },
    //   secret:'teacher',
    //   answer:'',
    //   gender:'male'   
    // });
    this.signUpform.form.patchValue({
      userData:{
        name:suggestedName
      },
      gender:'male'
    })
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted=true;
    this.user.username=this.signUpform.value.userData.name;
    this.user.email=this.signUpform.value.userData.email;
    this.user.secretQuestion=this.signUpform.value.secret;
    this.user.answer=this.signUpform.value.answer;
    this.user.gender=this.signUpform.value.gender;

    this.signUpform.reset();
  }

}
