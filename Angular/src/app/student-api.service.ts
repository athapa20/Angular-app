import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  apiURL: string = 'https://i21t1zno4m.execute-api.us-east-1.amazonaws.com/dev/';
  constructor(private httpClient: HttpClient) { }
}
