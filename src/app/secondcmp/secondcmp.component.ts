import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-secondcmp',
  templateUrl: './secondcmp.component.html',
  styleUrls: ['./secondcmp.component.css']
})
export class SecondcmpComponent implements OnInit {
public pageSize = 5;
public currentPage = 0;
public totalSize = 0;

  constructor(private myservice: MyserviceService) { }
  employees: Employee[];
  array: Employee[];
  displayedColumns = ['name', 'age', 'salary','delete'];
  ngOnInit() {
    this.onGetAll()
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.employees = part;
  }

  onGetAll(){
    this.myservice.getAllEmployees().subscribe(res=>{
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

  

}
