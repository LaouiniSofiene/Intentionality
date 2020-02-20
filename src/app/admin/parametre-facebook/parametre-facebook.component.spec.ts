import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreFacebookComponent } from './parametre-facebook.component';

describe('ParametreFacebookComponent', () => {
  let component: ParametreFacebookComponent;
  let fixture: ComponentFixture<ParametreFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
