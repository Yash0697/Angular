import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeInfo } from '../EmployeeInfo';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empList: EmployeeInfo[] = [
  new EmployeeInfo(1, "Ramprasad", 25000, "Accounts"),
  new EmployeeInfo(2, "Laxmanprasad", 22000, "HR"),
  new EmployeeInfo(3, "Carlos", 33000, "Business"),
  new EmployeeInfo(5, "Ramesh", 20000, "Dvelopment")
  ];

  emp_ID:number;
  constructor(private route:ActivatedRoute) {
  route.params.subscribe(params=>{this.emp_ID = params['id'];});
   if(this.emp_ID != undefined)
   {
   let id = this.emp_ID;
   this.empList = this.empList.filter(function(emp){
   return emp.emp_ID == id;
   });
   }
   }

    compareSal( emp1:EmployeeInfo, emp2:EmployeeInfo ) {
     if (emp1.emp_Sal < emp2.emp_Sal ){
       return -1;
     }
     if ( emp1.emp_Sal > emp1.emp_Sal ){
       return 1;
     }
     return 0;
   }

   compareSalRev( emp1:EmployeeInfo, emp2:EmployeeInfo ) {
    if (emp1.emp_Sal < emp2.emp_Sal ){
      return 1;
    }
    if ( emp1.emp_Sal > emp1.emp_Sal ){
      return -1;
    }
    return 0;
  }
sortSal()
{
this.empList.sort(this.compareSal);
}

compareNames( emp1:EmployeeInfo, emp2:EmployeeInfo ) {
 if (emp1.emp_Name < emp2.emp_Name ){
   return -1;
 }
 if ( emp1.emp_Name > emp1.emp_Name ){
   return 1;
 }
 return 0;
}
sortName()
{
this.empList.sort(this.compareNames);
}

  compareDepts(emp1: EmployeeInfo, emp2: EmployeeInfo) {
    if (emp1.emp_Dept < emp2.emp_Dept) {
      return -1;
    }
    if (emp1.emp_Dept > emp1.emp_Dept) {
      return 1;
    }
    return 0;
  }
  sortDept() {
    this.empList.sort(this.compareDepts);
  }
  ngOnInit(): void {
  }

}
