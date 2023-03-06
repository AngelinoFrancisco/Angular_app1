import { Animal } from './../Animals';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

const Headers = new HttpHeaders()


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }


  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.apiUrl}animals`)
  }

  create(animal:Animal):Observable<Animal>{

    return this.http.post<Animal>(`${this.apiUrl}animals`, animal)
  }

  update(animal:Animal):Observable<Animal>{ 
    return this.http.put<Animal>(`${this.apiUrl}animals/${animal.id}`, animal)
  }

  delete(id:number):Observable<boolean>{

    return this.http.delete<boolean>(`${this.apiUrl}animals/${id}`)

  }
}
