import { Component, OnInit } from '@angular/core';
import { ItuneService } from '../services/itune.service';
import { observable } from 'rxjs';
@Component({
  selector: 'itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit { 
  tracks=[];
  name:string;
  search(){
    var observable=this.service.find(this.name);
    observable.subscribe((response)=>{
      this.tracks=response.results; 
    });
  }
  constructor(public service:ItuneService) {
  }

  ngOnInit() {
  }

}
