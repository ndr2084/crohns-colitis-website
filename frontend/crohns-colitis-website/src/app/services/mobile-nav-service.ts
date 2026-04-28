import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileNavService {
  isOpen = signal(false);
  toggle() {
    this.isOpen.update(v => !v);
  }

}
