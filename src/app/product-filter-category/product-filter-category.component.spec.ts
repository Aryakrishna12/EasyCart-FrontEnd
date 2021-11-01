import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterCategoryComponent } from './product-filter-category.component';

describe('ProductFilterCategoryComponent', () => {
  let component: ProductFilterCategoryComponent;
  let fixture: ComponentFixture<ProductFilterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFilterCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
