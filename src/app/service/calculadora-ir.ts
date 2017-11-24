import { OperacaoFinalizada } from './../model/operacao-finalizada';
import { Operacao, TradeType, Market } from 'app/model';

export class CalculadoraIR {

    private tradeSnapshot: TradesSnapshot = new TradesSnapshot({
            operacoes: [
                new Operacao({ ativo: 'CMIG4', dataOperacao: new Date('21/02/2014'), qtd: 100, 
                               tipo: TradeType.COMPRA, custoAcoes:  12.85, mercado: Market.ACOES })
            ]}
        );

    public static testCalcular() {
        new CalculadoraIR().calcular()
    }

    private calcular() {
        const operacoesFinalizadasNoMes = [];
        this.tradeSnapshot.operacoes.forEach(operacao => {
            const operacaoAbertaAtivo: Operacao = this.tradeSnapshot.operacoesAbertas.get(operacao.ativo)
            if (operacaoAbertaAtivo) {
                if (operacao.tipo == operacaoAbertaAtivo.tipo) {
                    this.atualizarPM(operacao, operacaoAbertaAtivo)
                }
                else {
                    this.processarIROperacao(operacaoAbertaAtivo, operacao)
                }
            }
            else {
                this.tradeSnapshot.operacoesAbertas.set(operacao.ativo, operacao)
            }
        });
    }

    atualizarPM(operacaoAberta: Operacao, novaOperacaoAtivo: Operacao) {
        const custoTotal = (operacaoAberta.custoAcoes * operacaoAberta.qtd) + (novaOperacaoAtivo.custoAcoes * novaOperacaoAtivo.qtd)
        const qtdTotal = operacaoAberta.qtd + novaOperacaoAtivo.qtd;
        operacaoAberta.custoAcoes = qtdTotal === 0 ? 0 : custoTotal / qtdTotal;
        operacaoAberta.qtd = qtdTotal;
    }

    processarIROperacao(operacaoAberta: Operacao, complementoOperacaoAberta: Operacao) {
        operacaoAberta.qtd = operacaoAberta.qtd - complementoOperacaoAberta.qtd;
        if(operacaoAberta.qtd === 0){
            this.tradeSnapshot.operacoesAbertas.delete(operacaoAberta.ativo);
        }
    }

}

class TradesSnapshot {
    operacoesAbertas: Map<String, any> = new Map<String, Operacao>();
    saldoCompensar: number = 0;
    operacoes: Operacao[];
    operacoesFinalizadas: OperacaoFinalizada;

    public constructor(init?: Partial<TradesSnapshot>) {
        Object.assign(this, init)
    }
}