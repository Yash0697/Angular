import { Component, OnInit } from '@angular/core';
import { JsonFileService } from './json-file.service';

@Component({
  selector: 'app-jsonfilehandling',
  templateUrl: './jsonfilehandling.component.html',
  styleUrls: ['./jsonfilehandling.component.css']
})
export class JsonfilehandlingComponent implements OnInit {

  constructor(private jsonService: JsonFileService) { }

  ngOnInit(): void {
  }

  Fname:string;
  paramName:string;
  paramValue:string;
  empList;
  emp;
  jsonFileServices(option:number) {
    if(option == 2){
    this.emp = this.jsonService.searchInJsonFile(this.Fname, this.paramValue);
    alert(this.emp.emp_ID);
    }
    else if(option == 1){
      this.empList = this.jsonService.getJsonData(this.Fname);
    }
  }
}

