import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from "./components/modal/modal.component";
import { SearchComponent } from "./components/search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    SearchComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Modals';
}