import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigateByUrl('staffLogin');
  }

}
