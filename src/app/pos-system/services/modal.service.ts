import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isModalOpen$ = new BehaviorSubject<boolean>(false);

  getModalState(): Observable<boolean> {
    return this.isModalOpen$.asObservable();
  }

  openModal(): void {
    this.isModalOpen$.next(true);
  }

  closeModal(): void {
    this.isModalOpen$.next(false);
  }
}
