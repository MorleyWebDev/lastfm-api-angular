import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObscComponent } from './obsc.component';

describe('ObscComponent', () => {
  let component: ObscComponent;
  let fixture: ComponentFixture<ObscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
