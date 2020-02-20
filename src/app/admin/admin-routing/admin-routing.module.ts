import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AddOrganisationComponent} from '../add-organisation/add-organisation.component';
import { ShowOrganisationComponent } from '../show-organisation/show-organisation.component';
import { ParametreFacebookComponent } from '../parametre-facebook/parametre-facebook.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          { 
            path: 'organisations/:id', 
            component: ShowOrganisationComponent 
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          },
          {
            path: 'ajoutOrganisation',
            component: AddOrganisationComponent
          },
          {
            path: 'parametreFacebook',
            component: ParametreFacebookComponent
          }

        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
