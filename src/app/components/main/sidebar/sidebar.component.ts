// sidebar.component.ts

import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/theme-toggle/theme.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarOpened: boolean = true;

  constructor(public themeService: ThemeService) {}

  toggleDarkMode(isDarkMode: boolean) {
    this.themeService.setDarkMode(isDarkMode);
  }
}
