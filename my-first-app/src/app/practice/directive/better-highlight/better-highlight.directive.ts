import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') bgColor:string;

  constructor(private elementRef:ElementRef,private renderer:Renderer2) {
    
   }
   ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
   }

   @HostListener('mouseenter') mouserover(event:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
    this.bgColor='blue';

   }
   @HostListener('mouseleave') mouseleave(event:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.bgColor='transparent';
   }

}
