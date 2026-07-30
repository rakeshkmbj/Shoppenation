import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { PosMainComponent } from '../pos-main/pos-main.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pos-modal',
  standalone: true,
  imports: [CommonModule, PosMainComponent],
  template: `
    <div class="pos-modal-overlay" *ngIf="isOpen$ | async" (click)="onBackdropClick()">
      <div class="pos-modal-container" (click)="$event.stopPropagation()">
        <!-- Modal Header -->
        <div class="pos-modal-header">
          <h2>Point of Sale</h2>
          <button class="close-btn" (click)="closeModal()" title="Close POS">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="pos-modal-body">
          <app-pos-main></app-pos-main>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pos-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .pos-modal-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      width: 95%;
      height: 95vh;
      max-width: 1600px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .pos-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #e0e0e0;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
      color: white;
    }

    .pos-modal-header h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .pos-modal-body {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Responsive design */
    @media (max-width: 1024px) {
      .pos-modal-container {
        width: 98%;
        height: 98vh;
      }
    }

    @media (max-width: 768px) {
      .pos-modal-container {
        width: 100%;
        height: 100vh;
        border-radius: 0;
      }

      .pos-modal-header {
        padding: 12px 16px;
      }

      .pos-modal-header h2 {
        font-size: 18px;
      }
    }
  `]
})
export class PosModalComponent implements OnInit {
  isOpen$: Observable<boolean>;

  constructor(private modalService: ModalService) {
    this.isOpen$ = this.modalService.getModalState();
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  onBackdropClick(): void {
    this.closeModal();
  }
}
