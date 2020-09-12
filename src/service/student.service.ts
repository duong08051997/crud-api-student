import {Injectable} from '@angular/core';
import {IStudent} from '../interface/istudent';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  URL = 'http://127.0.0.1:8000/api/students';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.URL);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }

  add(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.URL, student);
  }

  getStudentById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this.URL + '/' + id);
  }
edit(student: IStudent, id: number): Observable<any>{
    return this.http.put<IStudent>(this.URL + '/' + id, student);
  }
}
