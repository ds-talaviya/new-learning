import imageCompression from 'browser-image-compression';
 
async pickFromGallery() {
    let options: GalleryImageOptions = {
        correctOrientation: true,
    };

    try {
        const val = await Camera.pickImages(options);
        let images = val.photos;

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const response = await fetch(image.webPath!);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
            this.onFileChange(file);
        }
    } catch (error) {
        console.error('Error picking images from gallery:', error);
    }
}
 
async onFileChange(file: File) {
    this.originalImageSize = file.size / 1024;
    this.isCompressing = true;

    try {
        const compressedFile = await this.compressImage(file);
        this.compressedImageSize = compressedFile.size / 1024;
        this.displayCompressedImage(compressedFile);
        await this.uploadImage(compressedFile);
    } catch (error) {
        console.error('Error compressing the image', error);
    } finally {
        this.isCompressing = false;
    }
}
 
  async compressImage(file: File): Promise < File > {
    const options = {
        maxSizeMB: 1,
        // maxWidthOrHeight: 800,
        useWebWorker: true,
    };
    try {
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    } catch(error) {
        throw new Error('Image compression failed: ' + error.message);
    }
}

