import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APICallsComponent } from './api-calls.component';

describe('APICallsComponent', () => {
  let component: APICallsComponent;
  let fixture: ComponentFixture<APICallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APICallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APICallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
