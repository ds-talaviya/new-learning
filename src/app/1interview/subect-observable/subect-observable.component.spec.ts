import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubectObservableComponent } from './subect-observable.component';

describe('SubectObservableComponent', () => {
  let component: SubectObservableComponent;
  let fixture: ComponentFixture<SubectObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubectObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubectObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
