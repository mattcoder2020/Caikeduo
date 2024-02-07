import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisesalesComponent } from './merchandisesales.component';

describe('MerchandisesalesComponent', () => {
  let component: MerchandisesalesComponent;
  let fixture: ComponentFixture<MerchandisesalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchandisesalesComponent]
    });
    fixture = TestBed.createComponent(MerchandisesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
