import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemahajaanComponent } from './managemahajaan.component';

describe('ManagemahajaanComponent', () => {
  let component: ManagemahajaanComponent;
  let fixture: ComponentFixture<ManagemahajaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemahajaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemahajaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
