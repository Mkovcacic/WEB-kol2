import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private readonly url = "/api/files/";

  constructor(public http: HttpClient) {
    this.getFiles().subscribe();    
  }

  upload(file: any): Observable<any> {
    return this.http.post(this.url, file)
      .pipe(
        tap((res: any) => {
          console.log(res);
        })
      );
  }

  getFiles(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(
          (files: any[]) => {
            console.log(files);
          }
        )
      )
  }  
  
}
