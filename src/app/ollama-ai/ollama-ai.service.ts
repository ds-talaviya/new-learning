import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OllamaAiService {
  private apiUrl = 'http://localhost:3000/summarize';

  constructor(private http: HttpClient) {}

  getSummary(data: any): Observable<{ summary: string }> {
    return this.http.post<{ summary: string }>(this.apiUrl, { data });
  }
}
