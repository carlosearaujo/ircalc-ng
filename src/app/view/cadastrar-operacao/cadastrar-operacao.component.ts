
import { ObjectUtils } from './../../object-utils';
import { OperacaoService } from 'app/service';
import { Operacao, MarketDirection } from 'app/model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-cadastrar-operacao',
  templateUrl: './cadastrar-operacao.component.html',
  styleUrls: ['./cadastrar-operacao.component.scss'],
  providers: [OperacaoService]
})
export class CadastrarOperacaoComponent implements OnInit {

  operacao: Operacao = new Operacao({marketDirection: this.getMarketDirections()[0].value});

  constructor(private service: OperacaoService, private utils: ObjectUtils) { }

  ngOnInit() {
  }

  salvarOperacao() {
    this.service.save(this.operacao).subscribe(res => {
      console.log(res)
    })
  }

  getMarketDirections(){
    return this.utils.getEnumValues(MarketDirection);
  }

}
