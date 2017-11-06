import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kana',
  templateUrl: './kana.component.html',
  styleUrls: ['./kana.component.css']
})
export class KanaComponent implements OnInit {
  private result:Array<any>;
  private name:string;

  constructor(private dataService:DataService) {
    this.onLoad();
  }

  onAdd(){
    //if(name !== null && name !== '') {
    this.dataService.addCourse(this.name).subscribe(res=>{
      console.log(res);
      this.onLoad();
    });
  //}
}

  onDelete(name:string){
    this.dataService.deleteCourse(name).subscribe(res=>{
      console.log(res);
      this.onLoad();
    })

  }


  onLoad(){
    this.dataService.getCourse().subscribe(res=>{
      console.log(res);
    this.result = res;
  });
  }
  ngOnInit() {
  }

}
