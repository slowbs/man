import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getCourse(){
    return this.http.get('/api/show').map(res=>res.json().message);
  }

  getCourse2(id:string){
    return this.http.get('/saka/show/' + id).map(res=>res.json().message);
  }

  getCourse3(username:string){
    return this.http.get('/saka/show/' + username).map(res=>res.json().message);
  }

  deleteCourse(course:string){
    return this.http.delete('/api/delete/' + course).map(res=>res.json().message);
  }

  addCourse(course:string){
    if( course != null && course !== "" ){
    const data = { name:course };
    return this.http.post('/api/add', data).map(res=>res.json().message);
  }
}

  public getNameDetail(username:string) {
    return this.http.get('/user/show/' + username).map(res=>res.json().message);
  }
}
