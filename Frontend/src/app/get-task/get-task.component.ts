import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.scss']
})
export class GetTaskComponent implements OnInit {

  data: any = []
  id = ''
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  get(){
    if(this.id.length > 0){
      this.http.get('http://localhost:5000/get-tasks-for-worker/'+this.id).subscribe(data=>{
        this.data = data;
      })
    }
  }

}
