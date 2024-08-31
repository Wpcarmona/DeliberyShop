import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {

  @Input() idProduct!: string;
  @Input() productName!: string;
  @Input() productDescription!: string;
  @Input() productImage!: string;
  @Input() productPrice!: number;
  @Input() discountPercentage?: number;
  @Input() hasDiscount: boolean = false;

  @Output() openPopup = new EventEmitter<string>();

  get discountedPrice(): number {
    if (this.hasDiscount && this.discountPercentage) {
      return this.productPrice - (this.productPrice * this.discountPercentage / 100);
    }
    return this.productPrice;
  }


  handleClick(event: MouseEvent, id:string): void {
    console.log("hola" +id);
    this.openPopup.emit(id);
    if (navigator.vibrate) {
      navigator.vibrate(40); // Vibración de 50 milisegundos
    }
    
  }
}
