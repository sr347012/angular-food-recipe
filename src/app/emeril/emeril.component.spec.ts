import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerilComponent } from './emeril.component';

describe('EmerilComponent', () => {
  let component: EmerilComponent;
  let fixture: ComponentFixture<EmerilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
