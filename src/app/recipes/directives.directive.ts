import {
  Directive, ElementRef,
  Host,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
  private defaultColor: string = "";
  constructor(private el: ElementRef) {
    this.el = el;
    this.setColor(this.defaultColor);

  }
  @HostListener('mouseenter')
  onMouseEnter() {
    // this.role ="li";
    this.setColor('#0E3F5E');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    // this.role ="a";
    this.setColor(this.defaultColor);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
