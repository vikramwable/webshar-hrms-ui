import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: 'right',
    },
    columns: {
      empId: {
        title: 'Employee ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      designation: {
        title: 'Position',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      isActive: {
        title: 'Status',
        type: 'boolean',
        filter: false,
        valuePrepareFunction: (value) => { return value == true ? "Active" : "Inactive" }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private dataService: DataService, private dialogService: NbDialogService) {
    this.loadEmployees();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  open_employee_modal() {
    this.dialogService.open(NewEmployeeComponent)
      .onClose.subscribe();
  }

  public loadEmployees(){
    this.dataService.getEmployees().subscribe((data: any[]) => {
      this.source.load(data);
    }, (error) => {
      this.source.load([]);
    });
  }

}
