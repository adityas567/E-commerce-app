import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISliderComponent } from './i-slider.component';

describe('ISliderComponent', () => {
  let component: ISliderComponent;
  let fixture: ComponentFixture<ISliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
