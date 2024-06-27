import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { DataFormComponent } from '../FormComponents/data-form/data-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonsComponent } from '../FormComponents/view-persons/view-persons.component';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  { path: 'form', component: DataFormComponent },
  { path: 'view', component: ViewPersonsComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    BrowserModule, RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }

