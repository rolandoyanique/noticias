import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private HttpClient:HttpClient) { }
  getNoticias(parametros:any):Observable<any>{
    const url='https://newsapi.org/v2/top-headlines/sources?apiKey=a2fd363ab0954ce5b96f3503c83a76fb&country='+parametros.pais+'&category='+parametros.categoria;
    //const url='https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=a2fd363ab0954ce5b96f3503c83a76fb
    return this.HttpClient.get(url);
  }
}
