import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  @Output() isDarkModeChange = new EventEmitter<boolean>();

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const newMode = !this.isDarkMode;
    this.themeService.setDarkMode(newMode);
    this.isDarkModeChange.emit(newMode);
  }
}
