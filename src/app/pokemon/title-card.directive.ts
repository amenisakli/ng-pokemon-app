import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnTitleCard]",
})
export class TitleCardDirective {
  private initialColor: string = "#212121";
  private defaultColor: string = "#0af4cd";
  private defaultheight: number = 14;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }
  @HostListener("mouseenter") OnMouseEnter() {
    this.setBorder(this.defaultColor);
    this.setHeight(this.defaultheight);
  }
  @HostListener("mouseleave") OnMouseLeave() {
    this.setBorder("#212121");
    this.setHeight(13);
  }
  setHeight(height: number) {
    this.el.nativeElement.style.fontSize = `${height}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.color = `${color}`;
  }
}
