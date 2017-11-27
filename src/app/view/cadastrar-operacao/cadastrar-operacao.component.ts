import { ObjectUtils } from './../../object-utils';
import { OperacaoService } from 'app/service';
import { Operacao, MarketDirection, MarketType } from 'app/model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-cadastrar-operacao',
  templateUrl: './cadastrar-operacao.component.html',
  styleUrls: ['./cadastrar-operacao.component.scss'],
  providers: [OperacaoService, FormBuilder]
})
export class CadastrarOperacaoComponent implements OnInit {

  private selectedMarketDirection = this.getMarketDirections()[0];
  private selectedMarketType = this.getMarketType()[0];

  private operacao: Operacao = new Operacao();
  private _form: FormGroup;

  constructor(private service: OperacaoService, private utils: ObjectUtils, private fb: FormBuilder) { }

  ngOnInit() {
    this._form = this.fb.group({
      'qtd': ['', Validators.min(1)],
      'pricePerUnit': ['', Validators.required],
      'date': ['', Validators.required],
      'ticket': ['', Validators.required]
    })
    for (var i in this._form.controls) {
      this._form.controls[i].markAsTouched();
    }
  }

  salvarOperacao() {
    if(this._form.valid){
      const that = this;
      this.operacao.marketDirection = this.selectedMarketDirection.value;
      this.operacao.marketType = this.selectedMarketType.value;
      if(this.operacao.ticket.endsWith('F')){
        this.operacao.ticket = this.operacao.ticket.substring(0, this.operacao.ticket.length - 1)
      }
      this.service.save(this.operacao).subscribe(res => {
        console.log(res)
        that.operacao = new Operacao()
      })
    }
    else{
      this.validateAllFields(this._form); 
    }
  }

  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this.validateAllFields(control);  
        }
    });
} 

  getMarketDirections(){
    return this.utils.getEnumValues(MarketDirection);
  }

  getMarketType(){
    return this.utils.getEnumValues(MarketType);
  }

}
