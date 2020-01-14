import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  
  public saveEmployee(employee: Employee): Observable<any>{
    return this.http.post('http://dummy.restapiexample.com/api/v1/create',employee)
    
  }

  public updateEmployee(id: number, employee: Employee){
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/'+id,employee)
    
  }

  public deleteEmployee(id: number){
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id)
    
  }

  public getAllEmployees(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  }

}
