import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersQuestComponent } from './inters-quest.component';

describe('IntersQuestComponent', () => {
  let component: IntersQuestComponent;
  let fixture: ComponentFixture<IntersQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
