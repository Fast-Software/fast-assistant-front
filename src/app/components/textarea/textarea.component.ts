import { Component, Input } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
}
