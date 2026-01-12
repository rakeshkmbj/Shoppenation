import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-dashboard',
  templateUrl: './publisher-dashboard.component.html',
  styleUrls: ['./publisher-dashboard.component.css']
})
export class PublisherDashboardComponent implements OnInit {
sortType: string;
  constructor() { }

  ngOnInit(): void {
  }

  sortEvent(e) {
    this.sortType = e.target.value;
    console.log(e.target.value);
  }

}
