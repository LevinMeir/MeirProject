import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersQuest2Component } from './inters-quest2.component';

describe('IntersQuest2Component', () => {
  let component: IntersQuest2Component;
  let fixture: ComponentFixture<IntersQuest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersQuest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersQuest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
