import { ObjectUtils } from './object-utils';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule, InputMaskModule, DropdownModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CalculadoraIRComponent } from './view/calculadora-ir/calculadora-ir.component';
import { CadastrarOperacaoComponent } from './view/cadastrar-operacao/cadastrar-operacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraIRComponent,
    CadastrarOperacaoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule, ReactiveFormsModule,
    InputTextModule, DropdownModule,  InputMaskModule, BrowserAnimationsModule, ButtonModule
  ],
  providers: [ObjectUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
