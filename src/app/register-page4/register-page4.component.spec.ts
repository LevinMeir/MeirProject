import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage4Component } from './register-page4.component';

describe('RegisterPage4Component', () => {
  let component: RegisterPage4Component;
  let fixture: ComponentFixture<RegisterPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
