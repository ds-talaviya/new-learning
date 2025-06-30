import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDocumentUploaderComponent } from './cloud-document-uploader.component';

describe('CloudDocumentUploaderComponent', () => {
  let component: CloudDocumentUploaderComponent;
  let fixture: ComponentFixture<CloudDocumentUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudDocumentUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudDocumentUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
