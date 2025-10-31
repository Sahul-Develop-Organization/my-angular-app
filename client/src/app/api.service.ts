//api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:3000/api';

    getMessage() {
        return this.http.get(`${this.baseUrl}/message`);
    }

    register(userData: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/register`, userData);
    }

    login(credentials: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/login`, credentials);
    }
}