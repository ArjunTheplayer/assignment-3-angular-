import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'assi3api';
  usersData:any={}
  data:any=[]
  

  constructor(private ds:DataService){}
  ngOnInit(): void {
     //get data
     this.ds.getData().subscribe({
      next:(data)=>{
        console.log(data)
        this.usersData=data;
        this.data=this.usersData.data
      console.log(this.data)  

      },
      error:(error)=>{
        console.log('err in getting data',error)
      }
    })
  }
}
