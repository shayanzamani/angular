import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-firstcmp',
  templateUrl: './firstcmp.component.html',
  styleUrls: ['./firstcmp.component.css']
})
export class FirstcmpComponent implements OnInit {
  formdata;
  pageSize = 5;
  currentPage = 0;
  totalSize = 0;
  employees: Employee[];
  array: Employee[];
  displayedColumns = ['name', 'age', 'salary','delete','edit'];
  updating = false
  updating_id = null
  button_name = null

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    // Clear the form and in the save mode
    this.formdata = new FormGroup({ 
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl()
   }); 
   this.updating = false
   this.updating_id = null
   this.button_name = 'ذخیره'
  }

  onSave(data){
    let a = new Employee({name:data.name,age:data.age,salary:data.salary})
    if(this.updating){
      this.onUpdate(this.updating_id,a)
    }
    else{
      this.myservice.saveEmployee(a).subscribe(res=>{
        console.log('server saved result',res)
      })
    }
    this.ngOnInit()
    
  }

  onUpdate(id,emp){
    this.myservice.updateEmployee(id,emp).subscribe(res=>{
      console.log('server updated result',res)
    })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;

    let part = this.array.slice(start, end);
    this.employees = part;
  }

  onGetAll(){
    this.myservice.getAllEmployees().subscribe((res)=>{
      this.array = (res as any).data;
      this.totalSize = this.array.length;
      this.iterator();
      console.log('server get all result',res)
    })
  }

  onDelete(data){

    this.myservice.deleteEmployee(data).subscribe(res=>{
      console.log('server deleted result',res)
    })
    
  }

  RowSelected(data){
    this.formdata = new FormGroup({ 
      name: new FormControl(data.employee_name),
      age: new FormControl(data.employee_age),
      salary: new FormControl(data.employee_salary)
   }); 
   this.updating = true
   this.updating_id = data.id
   this.button_name = 'ویرایش'
  }

}
