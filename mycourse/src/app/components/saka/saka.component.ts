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

  constructor(private route: ActivatedRoute, private dataService:DataService) {
    this.onLoad();
    
      }
  onLoad(){
    let username = this.route.snapshot.params.id;
    console.log(username);
      this.dataService.getCourse3(username).subscribe(res=>{
          console.log(res);
        this.result = res;
      });
      }

 
  ngOnInit() {


      
  }

}
