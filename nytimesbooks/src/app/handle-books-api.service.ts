import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandleBooksApiService {

  readonly apiKey = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';

  constructor(private http: HttpClient) { }

  getBooks(){
    const url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + this.apiKey;
    return this.http.get<any>(url);
  }
 
}
