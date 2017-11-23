import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraIRService } from './calculadora-ir.service';

describe('CalculadoraIRService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraIRService]
    });
  });

  it('should be created', inject([CalculadoraIRService], (service: CalculadoraIRService) => {
    expect(service).toBeTruthy();
  }));
});
