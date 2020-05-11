import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    EmployeesComponent,
  ],
})
export class PagesModule {
}
