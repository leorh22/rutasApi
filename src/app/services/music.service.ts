import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = 'https://discoveryprovider.audius.co/v1';

  constructor(private http: HttpClient) {}

  searchTracks(artistName: string): Observable<any> {
    const url = `${this.apiUrl}/tracks/search?query=${artistName}&app_name=ejercicioRutas`;
    return this.http.get<any>(url);
  }
}
