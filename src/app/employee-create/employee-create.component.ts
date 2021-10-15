import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = {id: Guid.raw(), name: '', email: '', phone: '' }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addEmployee() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Alternative way to check email format
    let errorMessage = '';

    if(this.employeeDetails.email.match(mailFormat)){
      this.restApi.createEmployee(this.employeeDetails).subscribe(() => {
        this.router.navigate(['/employee-list'])
      })

    }else{
        errorMessage = 'Invalid email format.';
        window.alert(errorMessage);
        this.router.navigate(['/employee-list']);
    }
  }

}