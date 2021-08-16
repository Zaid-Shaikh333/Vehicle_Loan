import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmischedulerComponent } from './emischeduler.component';

describe('EmischedulerComponent', () => {
  let component: EmischedulerComponent;
  let fixture: ComponentFixture<EmischedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmischedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmischedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
