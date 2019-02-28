import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("highlight") color = "yellow";

  constructor(private element: ElementRef) {

  }

  @HostListener("mouseenter") addHighlight(){
    this.element.nativeElement.style.background = this.color;
  }

  @HostListener("mouseleave") removeHighlight(){
    this.element.nativeElement.style.background = null;
  }

}
