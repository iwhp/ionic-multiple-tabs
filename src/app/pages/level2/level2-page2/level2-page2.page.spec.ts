import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2Page2Page } from './level2-page2.page';

describe('Level2Page2Page', () => {
  let component: Level2Page2Page;
  let fixture: ComponentFixture<Level2Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
