import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CreateClientComponent } from './create-client/create-client.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { HomepageComponent } from './homepage/homepage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,CreateClientComponent,ScheduleMeetingComponent,ReactiveFormsModule,HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router : Router){}
  integerRegex = /^\d+$/
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  title = 'Client Management Application';

  ngOnInit(): void{

}

  registerform = new FormGroup({
    Name : new FormControl("", [Validators.required,Validators.maxLength(30),Validators.minLength(2)]),
    Email : new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern(this.emailRegex)]),
    address : new FormControl("", [Validators.required,Validators.maxLength(30)]),
    password : new FormControl("", [Validators.required,Validators.maxLength(30),Validators.minLength(8)]),
    confirm_password : new FormControl("", [Validators.required,Validators.maxLength(30),Validators.minLength(8)]),


  });



  registerclient(){
    console.warn(this.registerform.value)
  }


  get Name():FormControl {
    return this.registerform.get("Name")as FormControl;
  }

  onClickFunction(){
    this.router.navigate(['/createclient'])
  }


}


 












  
  




