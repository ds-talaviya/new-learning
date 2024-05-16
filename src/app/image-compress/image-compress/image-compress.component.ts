import { Component } from '@angular/core';


@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.scss']
})
export class ImageCompressComponent {
  compressedData: any = [];
  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach(async file => {
        if (file.type.startsWith('image/')) {
          console.log('orginal file', file);
          const compressedFile = await this.compressImage(file);
          console.log('Compressed file', compressedFile);
          this.compressedData.push(compressedFile)
        } else {
          // Handle non-image files
          console.log('Non-image file', file);
        }
      });
    }
  }

  // chat GPT
  compressImage(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        const img = new Image();
        img.src = event.target.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          // const maxWidth = 800;
          // const maxHeight = 800;
          let width = img.width;
          let height = img.height;

          // if (width > height) {
          //   if (width > maxWidth) {
          //     height *= maxWidth / width;
          //     width = maxWidth;
          //   }
          // } else {
          //   if (height > maxHeight) {
          //     width *= maxHeight / height;
          //     height = maxHeight;
          //   }
          // }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(blob => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now()
              });
              resolve(compressedFile);
            } else {
              reject(new Error('Compression failed'));
            }
          }, file.type, 0.8); // Adjust the quality here (0.8 is 80% quality)
        };
      };
      reader.onerror = error => reject(error);
    });
  }
}
