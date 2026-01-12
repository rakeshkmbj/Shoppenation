import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { LoaderService } from './_services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 4';
  showLoader: boolean;


  constructor(
    private loaderService: LoaderService, public commonservice: CommonService) {

  }
  ngOnInit() {

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
      //    alert(this.showLoader);
    });
  }
}
