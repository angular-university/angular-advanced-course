import { TestBed, inject } from '@angular/core/testing';

import { InputBoxConfigService } from './input-box-config.service';

describe('InputBoxConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputBoxConfigService]
    });
  });

  it('should ...', inject([InputBoxConfigService], (service: InputBoxConfigService) => {
    expect(service).toBeTruthy();
  }));
});
