import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepaymenttypeComponent } from './managepaymenttype.component';

describe('ManagepaymenttypeComponent', () => {
  let component: ManagepaymenttypeComponent;
  let fixture: ComponentFixture<ManagepaymenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepaymenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepaymenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
