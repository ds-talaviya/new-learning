import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CORSBypassComponent } from './cors-bypass.component';

describe('CORSBypassComponent', () => {
  let component: CORSBypassComponent;
  let fixture: ComponentFixture<CORSBypassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CORSBypassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CORSBypassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
