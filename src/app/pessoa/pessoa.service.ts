import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  public listPessoas(): Observable<any[]> {
    return this.http.get<any[]>('http://www.mocky.io/v2/5b56834631000011004d1dd7');
  }

}
