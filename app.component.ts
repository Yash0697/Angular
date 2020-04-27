import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import {EmployeeInfo} from './EmployeeInfo';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstAngularProject';
  /*This const is for dep injection*/
  constructor(private myService : MyServiceService){}
  
  Fname:string;
   UID: number;
  name: string;
  Basic:number;
  HRA:number;
  DA:number;
  Tax:number;
  result:number;
  namesArray = ['Yashendra', 'Carlos', 'Ramprasad', 'Laxmanprasad'];
  name1:string;
  PID:number;
  Pname:string;
  Pcost:number;
  Ponline:string;
  big="Big Bazar";
  d_M="D Mart";
  ril = "Reliance";
  mega = "Mega Mart";
  Pmart:boolean;
  Dmart:boolean;
  Rmart : boolean;
  Mmart : boolean;
  label:string;
  EID:number;
  Ename:string;
  Esal:number;
  Edept:string;
  employee : EmployeeInfo;
  rotator:string="rotator";
  empList : EmployeeInfo[] = [];

  

addEmployee()
{

if((this.EID)==undefined || (this.Ename)==undefined || (this.Esal)==undefined || (this.Edept)==undefined)
alert("One or more fields are empty")
else{
this.employee = {emp_ID : this.EID, emp_Name:this.Ename,emp_Sal:this.Esal,emp_Dept:this.Edept};
this.empList.push(this.employee);
}
}
deleteEmp(emp:EmployeeInfo)
{
const index: number = this.empList.indexOf(emp);
    if (index !== -1) {
        this.empList.splice(index, 1);
            alert(emp.emp_Name+" deleted");
    }

}

updateFinally(emp:EmployeeInfo){
if((this.Ename)==undefined || (this.Esal)==undefined || (this.Edept)==undefined)
alert("One or more fields are empty")
else{
this.employee = {emp_ID : this.EID, emp_Name:this.Ename,emp_Sal:this.Esal,emp_Dept:this.Edept};
this.empList.push(this.employee);
alert(emp.emp_Name+" is updated");
}
}

updateEmp(emp:EmployeeInfo){
const index: number = this.empList.indexOf(emp);
(document.getElementById("sal") as HTMLTextAreaElement).value='';
(document.getElementById("name") as HTMLTextAreaElement).value='';
(document.getElementById("dept") as HTMLTextAreaElement).value='';
    if (index !== -1) {
        this.empList.splice(index, 1);
    }
}


/*For service*/

fileServices(){
this.myService.add();
this.myService.delete();
this.myService.append();
this.myService.search();
}
  salary() {
    let total = (+this.Basic) + (+this.HRA) + (+this.DA) - (this.Tax);
    alert("Your Gross Salary is : " + total);
    this.result = total;
  }

  product() {
    if ((this.Pname == undefined) || (this.PID) == undefined || (this.Ponline) == undefined || (this.Pcost) == undefined || this.PID.toString().length < 3)
      alert("One or many Fields are Empty");
    else {
      alert("New Product added successfully");
      if (this.Pmart == true)
        document.getElementById("big").innerHTML = "Big Bazar";

      if (this.Dmart == true)
        document.getElementById("d").innerHTML = "D Mart";

      if (this.Rmart == true)
        document.getElementById("r").innerHTML = "Reliance";

      if (this.Mmart == true)
        document.getElementById("m").innerHTML = "Mega Mart";
      console.log("Information displayed on screen")
    }
  }
}

