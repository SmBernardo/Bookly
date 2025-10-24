import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obrigado } from './obrigado';

describe('Obrigado', () => {
  let component: Obrigado;
  let fixture: ComponentFixture<Obrigado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obrigado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obrigado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
