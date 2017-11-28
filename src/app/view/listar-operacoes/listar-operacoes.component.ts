import { OperacaoService } from './../../service/operacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-operacoes',
  templateUrl: './listar-operacoes.component.html',
  styleUrls: ['./listar-operacoes.component.scss']
})
export class ListarOperacoesComponent implements OnInit {

  private rangeDates: Date[];
  private trades;

  constructor(private service: OperacaoService) { }

  ngOnInit() {
    this.initDateRages();
    this.find();
  }

  initDateRages() {
    const now = new Date();
    this.rangeDates = [ new Date(now.getFullYear(), now.getMonth(), 1),
                        new Date(now.getFullYear(), now.getMonth() + 1, 0)]
  }

  find(): any {
    if (this.rangeDates[0] && this.rangeDates[1]) {
      this.service.getTradesInDateRange(this.rangeDates).subscribe(res =>  this.trades = res);
    }
  }


}

enum OperationType {
  OPEN, CLOSED
}
