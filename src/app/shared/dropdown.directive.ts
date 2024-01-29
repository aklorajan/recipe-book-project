import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') open: boolean = false;

  @HostListener('click') clickToOpen(){
  this.open = !this.open
  }

  constructor() { }

}
