import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinjalsComponent } from './brinjals.component';

describe('BrinjalsComponent', () => {
  let component: BrinjalsComponent;
  let fixture: ComponentFixture<BrinjalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrinjalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinjalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
