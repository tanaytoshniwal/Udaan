import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title = ''
  asset = ''
  freq = 'Hourly'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  add(){
    if(this.title.length > 0 && this.asset.length > 0){
      let obj = {
          taskId: "",
          title:  this.title,
          asset: this.asset,
          frequency: this.freq,
          allocated: "",
          performedBy: ""
      }
      this.http.post('http://localhost:5000/add-task', obj).subscribe(data=>{
        this.freq = "Hourly"
        this.title = ''
        this.asset = ''
        console.log(data);
      })
    }
  }

}
