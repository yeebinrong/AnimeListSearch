import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(private http:HttpClient) { }

  async getData(g:String, q:String):Promise<Object> {
    return await this.http.get(`https://api.jikan.moe/v3/search/${g}?q=${q}`).toPromise()
  }
}
