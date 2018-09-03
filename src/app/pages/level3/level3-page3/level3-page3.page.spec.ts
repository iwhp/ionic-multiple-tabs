import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3Page3Page } from './level3-page3.page';

describe('Level3Page3Page', () => {
  let component: Level3Page3Page;
  let fixture: ComponentFixture<Level3Page3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level3Page3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level3Page3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
