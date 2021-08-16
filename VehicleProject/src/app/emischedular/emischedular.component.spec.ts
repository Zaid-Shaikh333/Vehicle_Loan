import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmischedularComponent } from './emischedular.component';

describe('EmischedularComponent', () => {
  let component: EmischedularComponent;
  let fixture: ComponentFixture<EmischedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmischedularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmischedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
