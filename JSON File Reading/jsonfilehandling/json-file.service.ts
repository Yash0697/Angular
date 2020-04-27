import { Injectable } from '@angular/core';
import  data  from '../data.json';
import { EmployeeInfo } from '../EmployeeInfo';
@Injectable({
  providedIn: 'root'
})
export class JsonFileService {

  empList;
  emp : EmployeeInfo;
  constructor() { }

  getEmployee(empArray, value) {
    var i;
    for (i = 0; i < empArray.length; i++) {
      if (empArray[i].emp_ID == value)
        return empArray[i];
    }
    }

  searchInJsonFile(filename, param_value)
  {
    
    if (filename == "data.json") {
    this.empList = data;
      this.emp = this.getEmployee(this.empList, parseInt(param_value));
      alert(this.emp.emp_ID);
    }
    return (this.emp);
  }

  getJsonData(filename:string)
  {
    if(filename == "data.json"){
    this.empList = data;
    return this.empList;
  }

  }

}
