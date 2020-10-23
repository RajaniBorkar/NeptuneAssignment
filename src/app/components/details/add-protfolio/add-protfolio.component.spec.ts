import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProtfolioComponent } from './add-protfolio.component';

describe('AddProtfolioComponent', () => {
  let component: AddProtfolioComponent;
  let fixture: ComponentFixture<AddProtfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProtfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProtfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
