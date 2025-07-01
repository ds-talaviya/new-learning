import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cors-bypass',
  templateUrl: './cors-bypass.component.html',
  styleUrls: ['./cors-bypass.component.scss']
})
export class CORSBypassComponent {
  imageUrl: any = '';
  base64Image: string = '';

  constructor(private http: HttpClient) { }

  async getBase64() {
    this.http.post<{ base64: string }>('http://localhost:3000/get-base64', {
      url: this.imageUrl,
    }).subscribe({
      next: (res: any) => {
        this.base64Image = res.base64;
      },
      error: (err: any) => {
        console.error('Error:', err);
        alert('Failed to fetch image.');
      },
    });
  }

}
