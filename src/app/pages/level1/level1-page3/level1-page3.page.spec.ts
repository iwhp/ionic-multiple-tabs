import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Page3Page } from './level1-page3.page';

describe('Level1Page3Page', () => {
  let component: Level1Page3Page;
  let fixture: ComponentFixture<Level1Page3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1Page3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1Page3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
