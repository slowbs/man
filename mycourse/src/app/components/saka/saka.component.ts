import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saka',
  templateUrl: './saka.component.html',
  styleUrls: ['./saka.component.css']
})
export class SakaComponent implements OnInit {
  private result:Array<any>;
  private name:string;

  constructor(private dataService:DataService) {
    this.onLoad();
  }



  onAdd(){
    if(name !== null && name !== '') {
    this.dataService.addCourse(this.name).subscribe(res=>{
      console.log(res);
      this.onLoad();
    });
  }
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
