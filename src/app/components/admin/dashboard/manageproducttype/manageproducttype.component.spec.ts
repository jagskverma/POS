import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproducttypeComponent } from './manageproducttype.component';

describe('ManageproducttypeComponent', () => {
  let component: ManageproducttypeComponent;
  let fixture: ComponentFixture<ManageproducttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageproducttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
