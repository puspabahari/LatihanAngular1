import { Directive, ElementRef, Renderer2, HostBinding, Input, OnInit, HostListener } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective /* implements OnInit */ {
  @HostBinding('style.color') textColor: string;
  @Input('appHoverHighlight') highLightColor: { background: string, text: string }

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  /* ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  } */

  @HostListener("mouseover") mouseMasuk(evenData: Event) {
    this.render.setStyle(this.elRef.nativeElement,'background-color',this.highLightColor.background);
    this.textColor=this.highLightColor.text;
  }

  @HostListener("mouseleave") mouseKeluar(evenData: Event) {
    this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.textColor='black';
  }

}
