import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOperacaoComponent } from './cadastrar-operacao.component';

describe('CadastrarOperacaoComponent', () => {
  let component: CadastrarOperacaoComponent;
  let fixture: ComponentFixture<CadastrarOperacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarOperacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
