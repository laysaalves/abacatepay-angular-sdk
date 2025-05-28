import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacatepayComponent } from './abacatepay.component';

describe('AbacatepayComponent', () => {
  let component: AbacatepayComponent;
  let fixture: ComponentFixture<AbacatepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacatepayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbacatepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
