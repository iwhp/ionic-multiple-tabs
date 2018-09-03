import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2Page1Page } from './level2-page1.page';

describe('Level2Page1Page', () => {
  let component: Level2Page1Page;
  let fixture: ComponentFixture<Level2Page1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2Page1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Page1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
