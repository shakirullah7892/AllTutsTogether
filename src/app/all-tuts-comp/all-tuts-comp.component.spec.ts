import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTutsCompComponent } from './all-tuts-comp.component';

describe('AllTutsCompComponent', () => {
  let component: AllTutsCompComponent;
  let fixture: ComponentFixture<AllTutsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTutsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTutsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
