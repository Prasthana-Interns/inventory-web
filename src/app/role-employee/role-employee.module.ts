import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEmployeeRoutingModule } from './role-employee-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
@NgModule({
    declarations: [
        EmployeeProfileComponent,
  ],
    imports: [
        CommonModule,
        RoleEmployeeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule        
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoleEmployeeModule { }
