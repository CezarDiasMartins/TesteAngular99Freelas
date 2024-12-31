import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modal: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  isVisible: boolean = false;

  alterModal() { this.isVisible = !this.isVisible; }
}