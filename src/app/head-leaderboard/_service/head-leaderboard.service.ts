import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeadLeaderboardService {
  constructor(private _http: HttpClient) {}

  getAllStudentsLeaderboard() {
    return this._http.get('http://localhost:4200/assets/data/users/users.json');
  }
  getAllSection() {
    return this._http.get('http://localhost:4200/assets/data/sections/sections.json');
  }
}
