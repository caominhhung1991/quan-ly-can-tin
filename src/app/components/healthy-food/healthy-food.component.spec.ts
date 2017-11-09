import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFoodComponent } from './healthy-food.component';

describe('HealthyFoodComponent', () => {
  let component: HealthyFoodComponent;
  let fixture: ComponentFixture<HealthyFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
