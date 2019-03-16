import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: "app-pospage",
  templateUrl: "./pospage.component.html",
  styleUrls: ["./pospage.component.css"]
})
export class PospageComponent implements OnInit {

  list=[
    {name:"Gold", value:2000},
    {name:"Silver", value:1200}
  ]

  username="jax"

  now = Date.now()

  constructor(private router: Router, private r:ActivatedRoute) {}

  ngOnInit() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  }

  openPOSContent() {
    this.router.navigate(['./poscontent'],{ relativeTo: this.r});
  }
  openCalculator(){
    this.router.navigate(['./calculator'],{ relativeTo: this.r});

  }
  openOrders(){
    this.router.navigate(['./orders'],{ relativeTo: this.r});

  }
  openLog(){
    this.router.navigate(['./viewlog'],{ relativeTo: this.r});

  }
  openInvoice(){
    this.router.navigate(['./geninvoice'],{ relativeTo: this.r});

  }
  backupData(){
    alert("backup")
  }
  logout(){
    alert("logged out")
  }
}
