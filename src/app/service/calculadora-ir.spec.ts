import { Operacao } from 'app/model';
import { CalculadoraIR } from './calculadora-ir';
import { TestBed, inject } from '@angular/core/testing';

describe('CalculadoraIR', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraIR]
    });
  });

  it('Update PM with zero values', inject([CalculadoraIR], (calculadoraIR: CalculadoraIR) => {
    const operacaoAberta: Operacao = new Operacao();
    calculadoraIR.atualizarPM(operacaoAberta, new Operacao());
    expect(operacaoAberta.custoAcoes).toEqual(0)
  }));

  it('Update PM default', inject([CalculadoraIR], (calculadoraIR: CalculadoraIR) => {
    const operacaoAberta: Operacao = new Operacao({ custoAcoes: 1000, qtd: 100 });
    calculadoraIR.atualizarPM(operacaoAberta, new Operacao({ custoAcoes: 5, qtd: 200 }));
    expect(operacaoAberta.custoAcoes).toEqual(2000 / 300)
    expect(operacaoAberta.qtd).toEqual(300)
  }));
});
