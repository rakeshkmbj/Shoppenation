import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

interface StoreInfo {
  name: string;
  terminalId: string;
  location: string;
}

@Component({
  selector: 'app-pos-header',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './pos-header.component.html',
  styleUrls: ['./pos-header.component.scss']
})
export class PosHeaderComponent implements OnInit {
  @Input() storeInfo!: StoreInfo;
  @Input() userName: string = 'User';
  @Output() notificationClick = new EventEmitter<void>();

  currentDate = new Date();
  currentTime = new Date();
  userAvatar = 'https://via.placeholder.com/40?text=RH';

  ngOnInit(): void {
    // Update time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
