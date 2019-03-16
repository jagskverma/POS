import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagekaarigarComponent } from './managekaarigar.component';

describe('ManagekaarigarComponent', () => {
  let component: ManagekaarigarComponent;
  let fixture: ComponentFixture<ManagekaarigarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagekaarigarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagekaarigarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
