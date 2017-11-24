import { TradeType } from './../enums/trade-type';
import { Custo } from './custo';

export class CustosBVMF implements Custo {

    private static TAXA_BVMF_NEGOCIACAO = (0.004994 / 100)
    private static TAXA_LIQUIDACAO = (0.0275 / 100)
    private static TAXA_BVMF_TOTAL = CustosBVMF.TAXA_BVMF_NEGOCIACAO + CustosBVMF.TAXA_LIQUIDACAO
    private static TAXA_BVMF_NEGOCIACAO_DAYTRADE = CustosBVMF.TAXA_BVMF_NEGOCIACAO 
    private static TAXA_LIQUIDACAO_DAYTRADE = (0.0200 /100)
    private static TAXA_BVMF_TOTAL_DAY_TRADE = CustosBVMF.TAXA_BVMF_NEGOCIACAO_DAYTRADE + CustosBVMF.TAXA_LIQUIDACAO_DAYTRADE

    calc(valorFinanceiroOperacao: number, isDayTrade: boolean) {
        return isDayTrade ? valorFinanceiroOperacao * CustosBVMF.TAXA_BVMF_TOTAL_DAY_TRADE : 
                            valorFinanceiroOperacao * CustosBVMF.TAXA_BVMF_TOTAL;
    }

}