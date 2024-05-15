import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appSizeImg]",
})
export class SizeImgDirective {
  constructor(private el: ElementRef) {}
  @Input("appSizeImg") set size(size: number) {
    this.el.nativeElement.style.width = `${size}px`;
    this.el.nativeElement.style.height = `${size}px`;
  }
}
