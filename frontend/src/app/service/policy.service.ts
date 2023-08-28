import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../Model/page';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:8080/api/v1/policies/page';
  private apiUrl2 = 'http://localhost:8080/api/v1/policies/pageCus/';

  constructor(private http: HttpClient) {}

  getPolicies(page: number, size: number): Observable<Page> {
    return this.http.get<Page>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getPoliciesByCustomer(id:number,page: number, size: number): Observable<Page> {
    return this.http.get<Page>(`${this.apiUrl2}${id}?page=${page}&size=${size}`);
  }
  getPoliciesWithSorting(page: number, size: number, sortField: string, sortOrder: string): Observable<Page> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', `${sortField},${sortOrder}`);
    return this.http.get<Page>(`http://localhost:8080/api/v1/policies/pagesort`, { params });
  }
  getPoliciesWithSortingByPremium(page: number, size: number, sortField: string, sortOrder: string): Observable<Page> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', `${sortField},${sortOrder}`);
    return this.http.get<Page>(`http://localhost:8080/api/v1/policies/pagesortprem`, { params });
  }
}