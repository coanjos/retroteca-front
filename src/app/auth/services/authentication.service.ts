import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';
import { LoginCredentials } from '../interfaces/login-credentials';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Auth | null>;
    public currentUser: Observable<Auth | null>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Auth | null>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Auth | null {
        return this.currentUserSubject.value;
    }

    login(credenciais: LoginCredentials) {
        return this.http.post<any>(`${environment.retrotecaApiUrl}/auth/login`, credenciais)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}