import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraIRComponent } from './calculadora-ir.component';

describe('CalculadoraIRComponent', () => {
  let component: CalculadoraIRComponent;
  let fixture: ComponentFixture<CalculadoraIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
