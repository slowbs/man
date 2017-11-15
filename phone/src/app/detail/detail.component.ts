import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {
  results: string[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {   
  }
 
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    // let id = this.route.snapshot.params.id;
    const id = this.route.snapshot.paramMap.get('id');
       this.http.get('api/show/'+id).subscribe(data => {
         // Read the result field from the JSON response.
         this.results = data['results'];
       });
}

save(hero): void {
  const data =  { id : hero._id,
                  name : hero.name}
     this.http.post('api/update/', data).subscribe();
     this.goBack();
}

goBack(): void {
  this.location.back();
}
}
