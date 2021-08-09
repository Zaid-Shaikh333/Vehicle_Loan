import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleloanComponent } from './vehicleloan.component';

describe('VehicleloanComponent', () => {
  let component: VehicleloanComponent;
  let fixture: ComponentFixture<VehicleloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
