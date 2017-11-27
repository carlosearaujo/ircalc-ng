import { Operacao } from 'app/model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
  
@Injectable()
export class OperacaoService {

  private BASE_URL = 'http://localhost:8022/trade/'

  constructor(private http: Http) { }

  save(operacao: Operacao): Observable<Operacao> {
    return this.http.post(this.BASE_URL + '/save', operacao).map(res => res.json())
  }

}
