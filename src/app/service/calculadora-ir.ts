import { Operacao, TradeType, Market } from 'app/model';

export class CalculadoraIR {

    public static testCalcular() {
        new CalculadoraIR().calcular(new TradesSnapshot({
            operacoes: [
                new Operacao({ ativo: 'CMIG4', dataOperacao: new Date('21/02/2014'), qtd: 100, 
                               tipo: TradeType.COMPRA, precoMedio:  12.85, mercado: Market.ACOES })
            ]}
        ))
    }

    private calcular(data: TradesSnapshot) {
        const operacoesFinalizadasNoMes = [];
        data.operacoes.forEach(operacao => {
            const operacaoAbertaAtivo: Operacao = data.operacoesAbertas.get(operacao.ativo)
            if (operacaoAbertaAtivo) {
                if (operacao.tipo == operacaoAbertaAtivo.tipo) {
                    this.atualizarPM(operacao, operacaoAbertaAtivo)
                }
                else {
                    const residual = this.processarIROperacao(operacaoAbertaAtivo, operacao)
                    if (residual) {
                        data.operacoesAbertas.set(operacao.ativo, residual);
                    }
                    else {
                        data.operacoesAbertas.delete(operacao.ativo)
                    }
                }
            }
            else {
                data.operacoesAbertas.set(operacao.ativo, operacao)
            }
        });
    }

    atualizarPM(operacaoAberta: Operacao, novaOperacaoAtivo: Operacao) {
        const custoTotal = (operacaoAberta.precoMedio * operacaoAberta.qtd) + (novaOperacaoAtivo.precoMedio * novaOperacaoAtivo.qtd)
        const qtdTotal = operacaoAberta.qtd + novaOperacaoAtivo.qtd;
        operacaoAberta.precoMedio = qtdTotal === 0 ? 0 : custoTotal / qtdTotal;
        operacaoAberta.qtd = qtdTotal;
    }

    processarIROperacao(operacaoAberta: Operacao, finalOperacao: Operacao): any {

    }

}

class TradesSnapshot {
    operacoesAbertas: Map<String, any> = new Map<String, Operacao>();
    saldoCompensar: number = 0;
    operacoes: Operacao[];

    public constructor(init?: Partial<TradesSnapshot>) {
        Object.assign(this, init)
    }
}