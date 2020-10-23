import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProtfolioComponent } from './list-protfolio.component';

describe('ListProtfolioComponent', () => {
  let component: ListProtfolioComponent;
  let fixture: ComponentFixture<ListProtfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProtfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProtfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
