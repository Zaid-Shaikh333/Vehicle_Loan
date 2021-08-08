import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedlistComponent } from './rejectedlist.component';

describe('RejectedlistComponent', () => {
  let component: RejectedlistComponent;
  let fixture: ComponentFixture<RejectedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
