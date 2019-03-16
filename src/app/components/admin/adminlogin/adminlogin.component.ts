import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AdminloginComponent implements OnInit {

  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }
}
