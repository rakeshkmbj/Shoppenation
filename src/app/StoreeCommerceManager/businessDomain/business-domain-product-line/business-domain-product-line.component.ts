import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-domain-product-line',
  templateUrl: './business-domain-product-line.component.html',
  styleUrls: ['./business-domain-product-line.component.scss']
})
export class BusinessDomainProductLineComponent implements OnInit {
  images = [1, 2, 3].map((n) => `../assets/images/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
  }

}
