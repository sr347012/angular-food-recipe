import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlainComponent } from './alain.component';

describe('AlainComponent', () => {
  let component: AlainComponent;
  let fixture: ComponentFixture<AlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
