import { MarketType, MarketDirection, Custo } from 'app/model';

export class Operacao {

    date: Date;
    ticket: String;
    pricePerUnit;
    quantity =  0;
    marketDirection: MarketDirection;
    marketType: MarketType = MarketType.DEFAULT;
    brokerTax = 0.00;
    brokerTaxFee = 5 / 100;

    public constructor(init?: Partial<Operacao>) {
        Object.assign(this, init)
    }
}
