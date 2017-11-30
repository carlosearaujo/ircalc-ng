import { ListarOperacoesComponent } from './../listar-operacoes/listar-operacoes.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculadora-ir',
  templateUrl: './calculadora-ir.component.html',
  styleUrls: ['./calculadora-ir.component.scss']
})
export class CalculadoraIRComponent implements OnInit {

  constructor() { }

  @ViewChild(ListarOperacoesComponent) listarOperacoes: ListarOperacoesComponent;

  ngOnInit() {
  }

  updateList(){
    this.listarOperacoes.find();
  }

}
