import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  profileInfo: any;
  selectedId: any;
  constructor(private ds: DataService, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('hola/', this.ac.snapshot.params['id']);
    this.selectedId = +this.ac.snapshot.params['id'];
    this.ds.getData().subscribe({
      next: (response) => {
        let temp = response.data;
        this.profileInfo = temp.filter((element: any) => {
          return element.id === this.selectedId;
        });
        console.log(this.profileInfo);
      },
    });
  }
}
