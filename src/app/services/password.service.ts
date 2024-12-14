import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PasswordItem {
    id?: number;
    category: string;
    app: string;
    userName: string;
    encryptedPassword: string;
}

@Injectable({
    providedIn: 'root'
})
export class PasswordService {
    //api url to the database server
    private apiURL = 'http://localhost:3000/passwords';

    constructor(private http: HttpClient) { }

    //returns all items
    getAll(): Observable<PasswordItem[]> {
        return this.http.get<PasswordItem[]>(this.apiURL);
    }

    //returns an item by id
    getById(id: number): Observable<PasswordItem> {
        return this.http.get<PasswordItem>(`${this.apiURL}/${id}`);
    }

    //add a new item with the structure of PasswordItem (id, category, app, userName, encryptedPassword)
    create(item: PasswordItem): Observable<PasswordItem> {
        return this.http.post<PasswordItem>(this.apiURL, item);
    }

    //updates an item by id
    update(id: number, item: PasswordItem): Observable<PasswordItem> {
        return this.http.put<PasswordItem>(`${this.apiURL}/${id}`, item);
    }

    //deletes an item by id
    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }

    //encrypts String type plaintext like "abcde12345" to crypted text and returns the crypted text as String type
    encryptPassword(plainText: string): string {
        return btoa(plainText);
    }

    //decrypts crypted text to plaintext and returns the plaintext as String type
    decryptPassword(encrypted: string): string {
        return atob(encrypted);
    }
}

