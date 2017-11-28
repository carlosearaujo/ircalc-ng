import { OperacaoService } from './service/operacao.service';
import { ObjectUtils } from './object-utils';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule, InputMaskModule, DropdownModule,
         ButtonModule, DataTableModule, SharedModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CalculadoraIRComponent } from './view/calculadora-ir/calculadora-ir.component';
import { CadastrarOperacaoComponent } from './view/cadastrar-operacao/cadastrar-operacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { ListarOperacoesComponent } from './view/listar-operacoes/listar-operacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraIRComponent,
    CadastrarOperacaoComponent,
    ListarOperacoesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule, ReactiveFormsModule,

    InputTextModule, DropdownModule,  InputMaskModule, BrowserAnimationsModule, ButtonModule,
    DataTableModule, SharedModule, CalendarModule
  ],
  providers: [ObjectUtils, OperacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
