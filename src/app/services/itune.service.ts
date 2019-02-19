import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItuneService {
  find(){
    //ajax
    console.log('find called');
    var observable=this.http.get('https://itunes.apple.com/search?term=enrique+iglesias&limit=3');
    return observable;
  }
  constructor(private http:HttpClient) { }
}
