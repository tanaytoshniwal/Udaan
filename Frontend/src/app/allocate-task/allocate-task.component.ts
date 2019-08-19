import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocate-task',
  templateUrl: './allocate-task.component.html',
  styleUrls: ['./allocate-task.component.scss']
})
export class AllocateTaskComponent implements OnInit {

  wid = ''
  tid = ''
  date = ''
  constructor() { }

  ngOnInit() {
  }
  assign(){
    if(this.wid.length>0 && this.tid.length>0 && this.date.length>0){
      let obj = {wid: this.wid, tid: this.tid, date: this.date};
    }
  }

}
