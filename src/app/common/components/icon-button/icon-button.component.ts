import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() public icon: IconDefinition;
  @Input() public text: string = '';
  @Input() public isPrefix: boolean = false;
  @Input() public isSuffix: boolean = false;
}
