import { Operacao } from './operacao';

export class OperacaoFinalizada{
    private operacaoInicialReferencia: Operacao;
    private operacaoFinalReferencia: Operacao;
    private snapshotPrecoMedioInicial: number;
    private snapshotPrecoMedioFinal: number;
}