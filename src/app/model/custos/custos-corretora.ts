import { Custo } from 'app/model';

export class CustosCorretora implements Custo{
    calc(valorFinanceiroOperacao: number, isDayTrade: boolean) {
        return CustosCorretora.CORRETAGEM + CustosCorretora.ISS;
    }
    private static CORRETAGEM = 2.9
    private static ISS = (5 / 100) * CustosCorretora.CORRETAGEM
}