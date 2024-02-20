import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Role } from '../interfaces/role';
import { Observable, catchError, delay, of } from 'rxjs';
import { ResponseRequest } from '../interfaces/response-request';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private urlRoles: string = `${environment.baseUrl}/${environment.urlRoles}`;

  constructor(private http: HttpClient) {}

  public getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.urlRoles}/list`).pipe(catchError(() => of([])));
  }

  public getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.urlRoles}/${id}`).pipe(delay(1500))
  }

  public createRole(data: Role): Observable<ResponseRequest> {
    return this.http.post<ResponseRequest>(this.urlRoles, data).pipe(delay(2500));
  }

  public updateRole(id: number, data: Role): Observable<ResponseRequest> {
    return this.http.put<ResponseRequest>(`${this.urlRoles}/${id}`, data).pipe(delay(2500))
  }

  public deleteRole(id: number): Observable<ResponseRequest> {
    return this.http.delete<ResponseRequest>(`${this.urlRoles}/${id}`);
  }
}
