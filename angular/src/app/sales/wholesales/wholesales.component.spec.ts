import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalesComponent } from './wholesales.component';

describe('WholesalesComponent', () => {
  let component: WholesalesComponent;
  let fixture: ComponentFixture<WholesalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WholesalesComponent]
    });
    fixture = TestBed.createComponent(WholesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
