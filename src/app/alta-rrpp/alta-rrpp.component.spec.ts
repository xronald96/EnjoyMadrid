import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRrppComponent } from './alta-rrpp.component';

describe('AltaRrppComponent', () => {
  let component: AltaRrppComponent;
  let fixture: ComponentFixture<AltaRrppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaRrppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
