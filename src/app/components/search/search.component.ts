import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    // Escuta cliques fora da lista
    this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      if(!this.el.nativeElement.contains(target)) this.listOpen = false;
    });
  }

  @Input() label: string = "";
  @Input() placeholder: string = "";
  searchTerm: string = '';
  listOpen: boolean = false;
  items: string[] = [
    'Product name 1',
    'Product name 10',
    'Product name 21'
  ];

  // Filtrar os itens com base na pesquisa
  get filteredItems(): string[] {
    return this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Controla a visibilidade da lista de opções
  toggleList(isOpen: boolean) {
    this.listOpen = isOpen;
  }

  // Seleciona um item
  selectItem(item: string) {
    this.searchTerm = item;  // Preenche o campo com o item selecionado
    this.listOpen = false; // Fecha o dropdown
  }
}