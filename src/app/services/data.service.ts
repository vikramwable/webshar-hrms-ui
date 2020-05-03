import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:1337/localhost:8020/hrms/api';
  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get(this.REST_API_SERVER + '/employees');
  }
}
