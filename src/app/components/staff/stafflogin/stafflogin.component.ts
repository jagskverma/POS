import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';

import {AdminloginComponent } from '../../admin/adminlogin/adminlogin.component'

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StaffloginComponent implements OnInit {

  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  })
 
  constructor(private fb: FormBuilder,private dialog: MatDialog) { }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value)
  }

  adminLoginDialog(){
    this.dialog.open(AdminloginComponent, {
      panelClass: 'posapp-no-padding-dialog',
  });
  }

}
