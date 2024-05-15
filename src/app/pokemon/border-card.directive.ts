import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultheight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultheight);
    this.setBorder(this.initialColor);
  }
  @Input("pkmnBorderCard") borderColor: string;
  @HostListener("mouseenter") OnMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") OnMouseLeave() {
    this.setBorder("#f5f5f5");
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
