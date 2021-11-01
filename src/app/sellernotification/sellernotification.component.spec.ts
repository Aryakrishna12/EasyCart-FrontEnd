import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellernotificationComponent } from './sellernotification.component';

describe('SellernotificationComponent', () => {
  let component: SellernotificationComponent;
  let fixture: ComponentFixture<SellernotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellernotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellernotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
