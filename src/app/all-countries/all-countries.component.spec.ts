import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesComponent } from './all-countries.component';

describe('AllCountriesComponent', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
