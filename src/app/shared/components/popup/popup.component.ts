import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() isVisible: boolean = false;  // Controla la visibilidad del popup
  @Output() close = new EventEmitter<void>();  // Evento para cerrar el popup

  closePopup() {
    this.close.emit();  // Emite el evento para cerrar el popup
  }
}
