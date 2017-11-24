import { Market, TradeType, Custo } from 'app/model';

export class Operacao {
    ticket: String;
    quantity =  0;
    price = 0;
    type: TradeType;
    mercado: Market;
    date: Date;
    custosOperacionais: Custo[];

    public constructor(init?: Partial<Operacao>) {
        Object.assign(this, init)
    }

    public custoFinanceiroTotal(isDayTrade: boolean) {
        let totalCustos = this.price * this.quantity;
        this.custosOperacionais.forEach(custoOperacional => totalCustos += custoOperacional.calc(this.price * this.quantity, isDayTrade))
        return totalCustos;
    }
}
