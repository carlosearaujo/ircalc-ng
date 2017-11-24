import { Market, TradeType, Custo } from 'app/model';

export class Operacao {
    ativo: String;
    qtd =  0;
    custoAcoes = 0;
    tipo: TradeType;
    mercado: Market;
    dataOperacao: Date;
    custosOperacionais: Custo[];

    public constructor(init?: Partial<Operacao>) {
        Object.assign(this, init)
    }

    public custoFinanceiroTotal(isDayTrade: boolean){
        let totalCustos = this.custoAcoes;
        this.custosOperacionais.forEach(custoOperacional => totalCustos += custoOperacional.calc(this.custoAcoes, isDayTrade))
        return totalCustos;
    }
}
