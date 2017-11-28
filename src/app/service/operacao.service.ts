import { Operacao } from 'app/model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as moment from 'moment';

@Injectable()
export class OperacaoService {

  private BASE_URL = 'http://localhost:8022/trade/'

  constructor(private http: Http) { }

  save(operacao: Operacao): Observable<Operacao> {
    return this.http.post(this.BASE_URL + '/save', operacao).map(res => res.json())
  }

  getTradesInDateRange(dateRange: Date[], projection?: any): Observable<Operacao> {
    const selection = [ { field: 'date', value: moment(dateRange[0]).format('DD/MM/YYYY'), operator: 'BIGEQTHAN'},
                        { field: 'date', value: moment(dateRange[1]).format('DD/MM/YYYY'), operator: 'BIGEQTHAN'} ]
    const spec = { selection: selection , projection: projection ? projection : ['this.All'] }
    return this.http.post(this.BASE_URL + '/find', spec).map(res => res.json())
  }

}
