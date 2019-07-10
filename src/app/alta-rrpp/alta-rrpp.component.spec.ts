import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrppComponent } from './alta-rrpp.component';

describe('RrppComponent', () => {
  let component: RrppComponent;
  let fixture: ComponentFixture<RrppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
