/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbSelectModule,
} from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import {  } from '@nebular/theme';
import { NewEmployeeComponent } from './pages/employees/new-employee/new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbDateFnsDateModule.forRoot({ format: 'yyyy-MM-dd' }),
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbSelectModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewEmployeeComponent,
  ],
})
export class AppModule {
}
