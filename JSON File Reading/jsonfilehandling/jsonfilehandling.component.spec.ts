import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfilehandlingComponent } from './jsonfilehandling.component';

describe('JsonfilehandlingComponent', () => {
  let component: JsonfilehandlingComponent;
  let fixture: ComponentFixture<JsonfilehandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonfilehandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonfilehandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
