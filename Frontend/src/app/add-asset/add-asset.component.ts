import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

  desc = ''

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  add(){
    if(this.desc.length > 0){
      let obj = {
          assetId: "",
          title: this.desc
      };
      this.http.post('http://localhost:5000/add-asset', obj).subscribe(data=>{
        console.log(data);
        this.desc = ''
      });
    }
  }

}
