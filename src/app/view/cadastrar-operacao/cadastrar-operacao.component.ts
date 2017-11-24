import { OperacaoService } from 'app/service';
import { Operacao } from 'app/model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-cadastrar-operacao',
  templateUrl: './cadastrar-operacao.component.html',
  styleUrls: ['./cadastrar-operacao.component.scss'],
  providers: [OperacaoService]
})
export class CadastrarOperacaoComponent implements OnInit {

  operacao: Operacao = new Operacao();

  constructor(private service: OperacaoService) { }

  ngOnInit() {
  }

  salvarOperacao() {
    this.service.save(this.operacao).subscribe(res => {
      console.log(res)
    })
  }

}
