import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() data: any;
  @Input() class: string | undefined;

  @Output() handleClick = new EventEmitter();

  buttonClick(): void {
    this.handleClick.emit(this.data);
  }
}
