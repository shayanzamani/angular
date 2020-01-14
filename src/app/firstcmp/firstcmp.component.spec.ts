import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcmpComponent } from './firstcmp.component';

describe('FirstcmpComponent', () => {
  let component: FirstcmpComponent;
  let fixture: ComponentFixture<FirstcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
