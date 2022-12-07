import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';
import { EmployeePopUpComponent } from './employee-pop-up/employee-pop-up.component';


const routes: Routes = [{path:' ',redirectTo:'EmployeeListComponent',pathMatch:'full'},
                         {path:'admin',component:AdminComponent,
                           children:[{ path: 'devices', component: DevicesComponent,
                                       children: [{ path: 'add-device', component: AddDeviceComponent },
                                                  { path: 'employeePopUp', component: EmployeePopUpComponent}]
                                     },
                                     { path: 'approvals', component: ApprovalsComponent },
                             { path: 'employees', component: EmployeeListComponent },
                             { path: 'employees/:id', component: EmpDetailViewComponent },
                            ]
                                     
                         },
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAdminRoutingModule { }