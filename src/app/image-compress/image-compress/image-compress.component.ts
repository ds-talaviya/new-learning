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
      const maxSizeBytes = 2 * 1024 * 1024;
      if (file.size <= maxSizeBytes) {
        resolve(file);
        return;
      }
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

          let quality = 0.9; // Start with a high quality
          const step = 0.1; // Step to decrease the quality in each iteration

          const compress = () => {
            canvas.toBlob(blob => {
              if (blob) {
                if (blob.size <= maxSizeBytes) {
                  // If the compressed file size is less than or equal to the target size, return it
                  const compressedFile = new File([blob], file.name, {
                    type: file.type,
                    lastModified: Date.now()
                  });
                  resolve(compressedFile);
                } else if (quality > step) {
                  // If the file is still too large and we can reduce the quality further, do so
                  quality -= step;
                  compress();
                } else {
                  // If we can't reduce the quality further, return an error
                  reject(new Error('Unable to compress the image to the exact desired size.'));
                }
              } else {
                reject(new Error('Compression failed'));
              }
            }, file.type, quality);
          };

          compress();
        };
      };
      reader.onerror = error => reject(error);
    });
  }
}
