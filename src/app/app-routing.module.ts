import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexpageComponent } from "./components/indexpage/indexpage.component";
import { StaffloginComponent } from "./components/staff/stafflogin/stafflogin.component";
import { AdminloginComponent } from "./components/admin/adminlogin/adminlogin.component";
import { PospageComponent } from "./components/staff/pos/pospage/pospage.component";
import { PoscontentComponent } from "./components/staff/pos/poscontent/poscontent.component";
import { CalculatorComponent } from "./components/staff/pos/calculator/calculator.component";
import { GenerateinvoiceComponent } from "./components/staff/pos/generateinvoice/generateinvoice.component";
import { OrdersComponent } from "./components/staff/pos/orders/orders.component";
import { ViewlogComponent } from "./components/staff/pos/viewlog/viewlog.component";

import { AdmindashboardComponent } from "./components/admin/dashboard/admindashboard/admindashboard.component";
import { GeneratestatementComponent } from "./components/admin/dashboard/generatestatement/generatestatement.component";
import { ManagecustomersComponent } from "./components/admin/dashboard/managecustomers/managecustomers.component";
import { ManagekaarigarComponent } from "./components/admin/dashboard/managekaarigar/managekaarigar.component";
import { ManagemahajaanComponent } from "./components/admin/dashboard/managemahajaan/managemahajaan.component";
import { ManageordersComponent } from "./components/admin/dashboard/manageorders/manageorders.component";
import { ManagepaymenttypeComponent } from "./components/admin/dashboard/managepaymenttype/managepaymenttype.component";
import { ManageproductsComponent } from "./components/admin/dashboard/manageproducts/manageproducts.component";
import { ManageproducttypeComponent } from "./components/admin/dashboard/manageproducttype/manageproducttype.component";
import { ManagepurchaseComponent } from "./components/admin/dashboard/managepurchase/managepurchase.component";
import { ManagesalesComponent } from "./components/admin/dashboard/managesales/managesales.component";
import { ManagestaffComponent } from "./components/admin/dashboard/managestaff/managestaff.component";
import { ReportsComponent } from "./components/admin/dashboard/reports/reports.component";
import { combineLatest } from "rxjs";

const routes: Routes = [
  {
    path: "",
    component: IndexpageComponent,
    children: [
      {
        path: "adminLogin",
        component: AdminloginComponent
      },
      {
        path: "staffLogin",
        component: StaffloginComponent
      }
    ]
  },
  {
    path: "pos",
    component: PospageComponent,
    children: [
      {
        path: "",
        component: PoscontentComponent
      },
      {
        path: "poscontent",
        component: PoscontentComponent
      },
      {
        path: "calculator",
        component: CalculatorComponent
      },
      {
        path: "geninvoice",
        component: GenerateinvoiceComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "viewlog",
        component: ViewlogComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdmindashboardComponent,
    children: [
      {
        path: "",
        component: ReportsComponent
      },
      {
        path: "reports",
        component: ReportsComponent
      },
      {
        path: "statement",
        component: GeneratestatementComponent
      },
      {
        path: "managecustomer",
        component: ManagecustomersComponent
      },
      {
        path: "managekaarigar",
        component: ManagekaarigarComponent
      },
      {
        path: "managemahajaan",
        component: ManagemahajaanComponent
      },
      {
        path: "manageorders",
        component: ManageordersComponent
      },
      {
        path: "managepaymenttype",
        component: ManagepaymenttypeComponent
      },
      {
        path: "manageproducts",
        component: ManageproductsComponent
      },
      {
        path: "manageproducttype",
        component: ManageproducttypeComponent
      },
      {
        path: "managepurchase",
        component: ManagepurchaseComponent
      },
      {
        path: "managesales",
        component: ManagesalesComponent
      },
      {
        path: "managestaff",
        component: ManagestaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
