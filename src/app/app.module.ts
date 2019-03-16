import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PoscontentComponent } from "./components/staff/pos/poscontent/poscontent.component"
import { HeaderComponent } from "./components/commons/header/header.component";
import { FooterComponent } from "./components/commons/footer/footer.component";
import { MenubarComponent } from "./components/commons/menubar/menubar.component";
import { IndexpageComponent } from "./components/indexpage/indexpage.component";
import { StaffloginComponent } from "./components/staff/stafflogin/stafflogin.component";
import { AdminloginComponent } from "./components/admin/adminlogin/adminlogin.component";
import { PospageComponent } from "./components/staff/pos/pospage/pospage.component";
import { AdmindashboardComponent } from "./components/admin/dashboard/admindashboard/admindashboard.component";
import {CalculatorComponent} from './components/staff/pos/calculator/calculator.component'
import {GenerateinvoiceComponent} from './components/staff/pos/generateinvoice/generateinvoice.component'
import {OrdersComponent} from './components/staff/pos/orders/orders.component'
import {ViewlogComponent} from './components/staff/pos/viewlog/viewlog.component'

import {GeneratestatementComponent} from './components/admin/dashboard/generatestatement/generatestatement.component'
import {ManagecustomersComponent} from './components/admin/dashboard/managecustomers/managecustomers.component'
import {ManagekaarigarComponent} from './components/admin/dashboard/managekaarigar/managekaarigar.component'
import {ManagemahajaanComponent} from './components/admin/dashboard/managemahajaan/managemahajaan.component'
import {ManageordersComponent} from './components/admin/dashboard/manageorders/manageorders.component'
import {ManagepaymenttypeComponent} from './components/admin/dashboard/managepaymenttype/managepaymenttype.component'
import {ManageproductsComponent} from './components/admin/dashboard/manageproducts/manageproducts.component'
import {ManageproducttypeComponent} from './components/admin/dashboard/manageproducttype/manageproducttype.component'
import {ManagepurchaseComponent} from './components/admin/dashboard/managepurchase/managepurchase.component'
import {ManagesalesComponent} from './components/admin/dashboard/managesales/managesales.component'
import {ManagestaffComponent} from './components/admin/dashboard/managestaff/managestaff.component'
import {ReportsComponent} from './components/admin/dashboard/reports/reports.component'


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    IndexpageComponent,
    StaffloginComponent,
    AdminloginComponent,
    PospageComponent,
    AdmindashboardComponent,
    PoscontentComponent,
    CalculatorComponent,
    OrdersComponent,
    GenerateinvoiceComponent,
    ViewlogComponent,
    GeneratestatementComponent,
    ManagecustomersComponent,
    ManagekaarigarComponent,
    ManagemahajaanComponent,
    ManageordersComponent,
    ManageordersComponent,
    ManagepaymenttypeComponent,
    ManageproductsComponent,
    ManageproducttypeComponent,
    ManagepurchaseComponent,
    ManagesalesComponent,
    ManagestaffComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
