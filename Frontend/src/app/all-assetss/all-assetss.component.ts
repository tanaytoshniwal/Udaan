import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-assetss',
  templateUrl: './all-assetss.component.html',
  styleUrls: ['./all-assetss.component.scss']
})
export class AllAssetssComponent implements OnInit {
  data:any=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/assets/all').subscribe(data=>{
      this.data = data;
    })
  }

}
