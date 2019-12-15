import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City } from '../models/City';
import { catchError, map, tap } from 'rxjs/operators';
import { Urlsettings } from '../urlsettings';



@Injectable({
  providedIn: 'root'
})



export class CityService {

  private getcities = Urlsettings.getCities;


  constructor(private http: HttpClient) {

   }

   searchTasks(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty search array.
      return of([]);
    }
    return this.http.get<any>(`${this.getcities}input=${term}${Urlsettings.sort}${Urlsettings.apikey}`).pipe(
      tap(_ => console.log(`found tasks matching "${term}"`)),
      catchError(this.handleError<any>('searchcities', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
