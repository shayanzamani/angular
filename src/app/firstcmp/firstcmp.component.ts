import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Employee } from '../employee';



@Component({
  selector: 'app-firstcmp',
  templateUrl: './firstcmp.component.html',
  styleUrls: ['./firstcmp.component.css']
})
export class FirstcmpComponent implements OnInit {
  formdata;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    // Clear the form and in the save mode
    this.formdata = new FormGroup({ 
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl()
   }); 
  }

  onSave(data){
    let a = new Employee({name:data.name,age:data.age,salary:data.salary})

      this.myservice.saveEmployee(a).subscribe(res=>{
        console.log('server saved result',res)
      })
    
  }

}
