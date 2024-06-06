import { Component } from '@angular/core';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-image-compress2',
  templateUrl: './image-compress2.component.html',
  styleUrls: ['./image-compress2.component.scss']
})
export class ImageCompress2Component {

  async handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const imageFile = input.files[0];
      console.log('originalFile size:', imageFile.size / 1024 / 1024, 'MB');

      const options = {
        maxSizeMB: 5,
        useWebWorker: true,
        minSizeMB:5
      };

      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile size:', compressedFile.size / 1024 / 1024, 'MB');
        this.uploadToServer(compressedFile);
      } catch (error) {
        console.error('Error during image compression:', error);
      }
    }
  }

  uploadToServer(file: File) {
    // Your logic to upload the file to the server
  }

}
