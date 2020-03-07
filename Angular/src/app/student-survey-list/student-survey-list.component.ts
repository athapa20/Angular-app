import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-survey-list',
  templateUrl: './student-survey-list.component.html',
  styleUrls: ['./student-survey-list.component.css']
})
export class StudentSurveyListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  studentList;
  
  ngOnInit() {
    let obs = this.http.get('https://i21t1zno4m.execute-api.us-east-1.amazonaws.com/devhttps://i21t1zno4m.execute-api.us-east-1.amazonaws.com/dev/list');
    obs.subscribe((response) => { this.studentList = response; });
  }

}
