import { Market, TradeType } from 'app/model';

export class Operacao {
    ativo: String;
    qtd =  0;
    precoMedio = 0;
    tipo: TradeType;
    mercado: Market;
    dataOperacao: Date;

    public constructor(init?: Partial<Operacao>) {
        Object.assign(this, init)
    }
}
