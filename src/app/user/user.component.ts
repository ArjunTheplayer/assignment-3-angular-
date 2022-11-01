import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 
  userData:any;
  constructor(private ds:DataService, private router:Router){}
  ngOnInit(): void {
    this.ds.getData().subscribe({
      next:(data)=>{
        this.userData = data
      },
      error:(error)=>{
        alert('Unable fetch the data')
      }
    })
  }
  viewUser(id:any){
    this.router.navigateByUrl(`/view-profile/${id}`)
  }

}
