import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cloud-document-uploader',
  templateUrl: './cloud-document-uploader.component.html',
  styleUrls: ['./cloud-document-uploader.component.scss']
})
export class CloudDocumentUploaderComponent implements OnInit {
  file: any = null;
  downloadUrl: string | null = null;

  constructor(private sb: SupabaseService, private http: HttpClient) { }

  ngOnInit(): void { }
  // supabase started
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  async upload() {
    if (!this.file) return;
    if (this.file) {
      this.sb.uploadFile(this.file).then(url => {
        console.log('File available at:', url);
      });
    }
  }
  // supabase ended

  // imagekit started
  nameOfFile = 'file_' + +new Date();
  handleUploadSuccess(event: any) {
    console.log("Upload success", event);
  }

  handleUploadError(err: any) {
    console.error("Upload failed", err);
  }
  // imagekit ended
}
