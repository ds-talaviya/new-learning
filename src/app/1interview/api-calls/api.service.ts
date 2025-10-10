import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  get(apiName: string, payload: any = null): Observable<any> {
    if (!!payload) {
      let params = new HttpParams().set('data', payload);
      return this.http.get(this.api + apiName, { params }).pipe(delay(2000));
    }
    return this.http.get(this.api + apiName).pipe(delay(2000));
  }
  post(apiName: string, payload: any): Observable<any> {
    return this.http.post(this.api + apiName, payload);
  }
  patch(apiName: string, payload: any): Observable<any> {
    return this.http.patch(this.api + apiName, payload);
  }
  delete(apiName: string): Observable<any> {
    return this.http.delete(this.api + apiName);
  }
}
