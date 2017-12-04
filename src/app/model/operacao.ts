import { MarketType, MarketDirection, Custo } from 'app/model';

export class Operacao {

    date: Date;
    ticket: String;
    pricePerUnit;
    quantity;
    marketDirection: MarketDirection;
    marketType: MarketType = MarketType.DEFAULT;
    brokerTax = 1.50;
    brokerTaxFee = 5 / 100;

    public constructor(init?: Partial<Operacao>) {
        Object.assign(this, init)
    }

    public get _ticket(){
        return this.ticket;
    }

    public set _ticket(value){
        this.ticket = value.trim()
    }
}
