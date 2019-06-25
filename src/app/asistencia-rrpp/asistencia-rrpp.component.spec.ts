import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaRrppComponent } from './asistencia-rrpp.component';

describe('AsistenciaRrppComponent', () => {
  let component: AsistenciaRrppComponent;
  let fixture: ComponentFixture<AsistenciaRrppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaRrppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaRrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
