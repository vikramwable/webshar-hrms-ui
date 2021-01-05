import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NbDateService } from '@nebular/theme';
import { FormGroup, FormControl } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

import { DataService } from '../../../services/data.service';
@Component({
  selector: 'ngx-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent {
  orgs = [];
  index = 0;
  employee_form = new FormGroup({
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    joiningDate: new FormControl(''),
    exitDate: new FormControl(''),
    organizationId: new FormControl(''),
    empId: new FormControl(''),
    designation: new FormControl(''),
    reportsTo: new FormControl(''),
    contact: new FormControl(''),
    address: new FormControl(''),
    isActive: new FormControl(true),
  })
  constructor(
    protected ref: NbDialogRef<NewEmployeeComponent>,
    protected dateService: NbDateService<Date>,
    private dataService: DataService,
    private toastrService: NbToastrService) {
    this.dataService.getOrgs().subscribe((orgs: any[]) => {
      this.orgs = orgs;
    }, (error) => {
      this.orgs = [];
      this.showToast('Some error occurred while fetching orgs', 'Request Failed!', 'top-right', 'danger');
    });
   }

   showToast(message, title, position, status) {
    this.toastrService.show(
      message,
      title,
      { position, status });
  }
  
  cancel() {
    this.ref.close();
  }

  submit() {
    console.log(this.employee_form.value)
    this.dataService.createEmployee(this.employee_form.value).subscribe(() => {
      location.reload();
    }, (error) => {
      this.showToast('Error', 'There was problem in creating Employee, please check all fields', 'top-right', 'danger');
    });
    this.ref.close(this.employee_form.value);
  }

}
