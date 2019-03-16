import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.css"]
})
export class AdmindashboardComponent implements OnInit {
  list = [{ name: "Gold", value: 2000 }, { name: "Silver", value: 1200 }];

  now = Date.now();

  constructor(private router: Router, private r: ActivatedRoute) {}

  ngOnInit() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  }

  displayReport() {
    this.router.navigate(["./reports"], { relativeTo: this.r });
  }
  manageProducts() {
    this.router.navigate(["./manageproducts"], { relativeTo: this.r });
  }
  manageSales() {
    this.router.navigate(["./managesales"], { relativeTo: this.r });
  }
  managePurchase() {
    this.router.navigate(["./managepurchase"], { relativeTo: this.r });
  }
  manageOrders() {
    this.router.navigate(["./manageorders"], { relativeTo: this.r });
  }
  manageCustomers() {
    this.router.navigate(["./managecustomer"], { relativeTo: this.r });
  }
  manageStaff() {
    this.router.navigate(["./managestaff"], { relativeTo: this.r });
  }
  manageMahajaan() {
    this.router.navigate(["./managemahajaan"], { relativeTo: this.r });
  }
  manageKaarigar() {
    this.router.navigate(["./managekaarigar"], { relativeTo: this.r });
  }
  managePaymentType() {
    this.router.navigate(["./managepaymenttype"], { relativeTo: this.r });
  }
  manageProductType() {
    this.router.navigate(["./manageproducttype"], { relativeTo: this.r });
  }
  generateStatement() {
    this.router.navigate(["./statement"], { relativeTo: this.r });
  }
  logout() {
    alert("logout");
  }
}
