import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { IconsModule } from '../../../../icons/icons.module';
import { InputComponent } from '../../../../components/input/input.component';
import { UploaderComponent } from '../../../../components/uploader/uploader.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ButtonComponent, InputComponent, UploaderComponent, IconsModule],
  templateUrl: './account.component.html',
})
export class AccountComponent {}
