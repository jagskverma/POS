import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoscontentComponent } from './poscontent.component';

describe('PoscontentComponent', () => {
  let component: PoscontentComponent;
  let fixture: ComponentFixture<PoscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
