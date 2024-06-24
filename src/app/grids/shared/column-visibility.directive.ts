import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[columnVisibility]'
})
export class ColumnVisibilityDirective implements OnChanges {

  @Input() columnVisibility: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columnVisibility']) {
      if (this.columnVisibility) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'table-cell');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    }
  }
}
