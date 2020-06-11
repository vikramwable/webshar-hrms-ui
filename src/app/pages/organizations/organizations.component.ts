import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { NewOrganizationComponent } from './new-organization/new-organization.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'ngx-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: 'right',
    },
    columns: {
      name: {
        title: 'Organization Name',
        type: 'string',
        filter: false
      },
      isActive: {
        title: 'Status',
        type: 'boolean',
        filter: false,
        valuePrepareFunction: (value) => { return value == true ? "Active" : "Inactive" }
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private dataService: DataService, private dialogService: NbDialogService) {
    this.loadOrganizations();
  }

  open_organization_modal() {
    this.dialogService.open(NewOrganizationComponent)
      .onClose.subscribe();
  }

  public loadOrganizations(){
    this.dataService.getOrgs().subscribe((data: any[]) => {
      this.source.load(data);
    }, (error) => {
      this.source.load([]);
    });
  }

  ngOnInit() {
  }

}
