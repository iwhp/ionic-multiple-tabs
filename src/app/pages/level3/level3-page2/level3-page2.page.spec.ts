import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3Page2Page } from './level3-page2.page';

describe('Level3Page2Page', () => {
  let component: Level3Page2Page;
  let fixture: ComponentFixture<Level3Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level3Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level3Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
