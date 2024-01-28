import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() yellowColorBorder: string = '1px solid yellow';
  @Input() blueColorBorder: string = '1px solid blue';
@HostBinding('style.border') border:string = '';
  constructor(private elRef: ElementRef,private renderer:Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  }
  @HostListener('mouseenter') mouseEnter(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow')
    this.border = this.yellowColorBorder
  }
@HostListener('mouseleave') mouseLeave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  this.border = this.blueColorBorder
}
}
