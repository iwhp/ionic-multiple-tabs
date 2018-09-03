import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Page2Page } from './level1-page2.page';

describe('Level1Page2Page', () => {
  let component: Level1Page2Page;
  let fixture: ComponentFixture<Level1Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
