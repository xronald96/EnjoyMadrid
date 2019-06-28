import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialRecuentosComponent } from './historial-recuentos.component';

describe('HistorialRecuentosComponent', () => {
  let component: HistorialRecuentosComponent;
  let fixture: ComponentFixture<HistorialRecuentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRecuentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialRecuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
