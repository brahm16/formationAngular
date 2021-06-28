import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogpost } from './models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
baseUrl="http://localhost:3000/api/v1";
  constructor(private http: HttpClient) { }

  getBlogPosts():Observable<Blogpost[]>{
    return this.http.get<Blogpost[]>(`${this.baseUrl}/blog-posts`);
  }
  getBlogPostById(id: string): Observable<Blogpost> {
    return this.http.get<Blogpost>(`${this.baseUrl}/blog-posts/${id}`);
  }
}
