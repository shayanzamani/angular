import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcmpComponent } from './secondcmp.component';

describe('SecondcmpComponent', () => {
  let component: SecondcmpComponent;
  let fixture: ComponentFixture<SecondcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
