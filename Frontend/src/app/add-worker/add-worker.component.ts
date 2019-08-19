import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  name = ''
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  add(){
    if(this.name.length > 0){
      let obj = {
          workerId: "",
          name: this.name,
          tasks: []
      };
      this.http.post('http://localhost:5000/add-worker', obj).subscribe(data=>{
        this.name = ''
        console.log(data);
      });
    }
  }

}
