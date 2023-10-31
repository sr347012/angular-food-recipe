import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotsComponent } from './carrots.component';

describe('CarrotsComponent', () => {
  let component: CarrotsComponent;
  let fixture: ComponentFixture<CarrotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
