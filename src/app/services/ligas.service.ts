import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligas } from '../ligas';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

url ='http://localhost:3000/ligas'


  constructor(private httpClient: HttpClient) { }

pesquisaLigas(): Observable<Ligas[]>{
  return this.httpClient.get<Ligas[]>(this.url)
}

}

  
  

