import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratestatementComponent } from './generatestatement.component';

describe('GeneratestatementComponent', () => {
  let component: GeneratestatementComponent;
  let fixture: ComponentFixture<GeneratestatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratestatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
