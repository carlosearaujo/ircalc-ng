import { Operacao } from 'app/model';
import { CalculadoraIR } from './calculadora-ir';
import { TestBed, inject } from '@angular/core/testing';

describe('CalculadoraIR', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraIR]
    });
  });

  it('Base PM test', inject([CalculadoraIR], (calculadoraIR: CalculadoraIR) => {
    const operacaoAberta: Operacao = new Operacao();
    calculadoraIR.atualizarPM(operacaoAberta, new Operacao());
    expect(operacaoAberta.precoMedio).toEqual(0)
  }));
});
