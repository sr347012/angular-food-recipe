import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthonyComponent } from './anthony.component';

describe('AnthonyComponent', () => {
  let component: AnthonyComponent;
  let fixture: ComponentFixture<AnthonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnthonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
