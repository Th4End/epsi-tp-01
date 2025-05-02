import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: boolean = false;
 // TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

  ngOnChanges() {
    // Appliquer ou supprimer la classe 'font-weight-bold' selon la valeur de appHighlight
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    }
  }
}
