import { DataService } from './../../data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private result:Array<any>;
  private name:string;

  constructor(private dataService:DataService) {
    this.onLoad2();
  }

  onAdd(){
    this.dataService.addCourse(this.name).subscribe(res=>{
      console.log(res);
      this.onLoad2();
    });
  }

  onDelete(name:string){
    this.dataService.deleteCourse(name).subscribe(res=>{
      console.log(res);
      this.onLoad2();
    })

  }


  onLoad2(){
    this.dataService.getCourse2().subscribe(res=>{
      console.log(res);
    this.result = res;
  });
}
}
