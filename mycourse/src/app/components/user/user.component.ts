import { DataService } from './../../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public result:Array<any>;
  public name:string;
  public number:any;
  public username:string;

  constructor(private dataService:DataService) {
    //this.onLoad2();
  }

  onAdd(){
    this.dataService.addCourse(this.name).subscribe(res=>{
      console.log(res);
   //   this.onLoad2();
    });
  }

  onDelete(name:string){
    this.dataService.deleteCourse(name).subscribe(res=>{
      console.log(res);
 //     this.onLoad2();
    })

  }

  /*onLoad2(){
    this.dataService.getCourse2().subscribe(res=>{
      console.log(res);
    this.result = res;
  });
}*/
  public getNameInfo() {
    this.dataService.getNameDetail(this.username).subscribe(res=> {
      console.log(res);
    this.number = res;
  });
}
}
