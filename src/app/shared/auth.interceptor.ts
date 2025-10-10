import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get token from localStorage
        const token = 'dhruvil';

        // Clone request and add Authorization header if token exists
        let authReq = req;
        if (token) {
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        // Handle response & errors
        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log("🚀 ~ AuthInterceptor ~ intercept ~ error:", error)
                if (error.status === 404) {
                    console.error('API not found (404)');
                } else if (error.status === 0) {
                    console.error('Network error');
                } else {
                    console.error('API error:', error.message);
                }
                return throwError(error.error.message);
            })
        );
    }
}
