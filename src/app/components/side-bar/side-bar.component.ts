import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {}
