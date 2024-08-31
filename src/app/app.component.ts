import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './shared/utils/notificaction.services';
import { CardViewComponent, ButtomComponent } from './shared/components';
import { PopupComponent } from "./shared/components/popup/popup.component";
import { CommonModule } from '@angular/common';
import { PRODUCTS } from './shared/utils/dummys/mock-products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardViewComponent, 
    ButtomComponent, 
    PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  products = PRODUCTS;
  isPopupVisible = false;
  popupProductId: string | null = null;

  constructor() {}

  showPopup(id: string) {
    this.popupProductId = id;
    this.isPopupVisible = true;
    setTimeout(() => {
      // Asegurarse de que la transición se aplique después de que el DOM esté actualizado
      document.querySelector('.popup-overlay')?.classList.add('show');
      document.querySelector('.popup-container')?.classList.add('show');
    }, 10); // Corto retraso para permitir que el DOM se actualice
  }

  hidePopup() {
    this.popupProductId = null;
    document.querySelector('.popup-overlay')?.classList.remove('show');
    document.querySelector('.popup-container')?.classList.remove('show');
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 300); // Tiempo de transición para ocultar el popup
  }
  

}
