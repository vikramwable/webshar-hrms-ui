import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NbDateService } from '@nebular/theme';
import { FormGroup, FormControl } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'ngx-new-organization',
  templateUrl: './new-organization.component.html',
  styleUrls: ['./new-organization.component.scss']
})
export class NewOrganizationComponent {
  orgs = [];
  index = 0;
  organization_form = new FormGroup({
    name: new FormControl(''),
    isActive: new FormControl(true),
  })
  constructor(
    protected ref: NbDialogRef<NewOrganizationComponent>,
    protected dateService: NbDateService<Date>,
    private dataService: DataService,
    private toastrService: NbToastrService) {
   }

   showToast(message, title, position, status) {
    this.toastrService.show(
      message,
      title,
      { position, status });
  }

  submit() {
    console.log(this.organization_form.value)
    this.dataService.createOrganization(this.organization_form.value).subscribe(() => {
      location.reload();
    }, (error) => {
      this.showToast('Error', 'There was problem in creating Organization, please check all fields', 'top-right', 'danger');
    });
    this.ref.close(this.organization_form.value);
  }

  cancel() {
    this.ref.close();
  }

}
