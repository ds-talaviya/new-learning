import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-cloud-document-uploader',
  templateUrl: './cloud-document-uploader.component.html',
  styleUrls: ['./cloud-document-uploader.component.scss']
})
export class CloudDocumentUploaderComponent implements OnInit {


  file: File | null = null;
  downloadUrl: string | null = null;

  constructor(private sb: SupabaseService) { }
  ngOnInit(): void { }

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
}
