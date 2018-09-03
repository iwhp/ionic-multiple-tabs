import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3Page1Page } from './level3-page1.page';

describe('Level3Page1Page', () => {
  let component: Level3Page1Page;
  let fixture: ComponentFixture<Level3Page1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level3Page1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level3Page1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
