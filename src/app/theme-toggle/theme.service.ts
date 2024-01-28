import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode = false;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get isDarkMode() {
    return this._darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this._darkMode = isDarkMode;

    // Use Renderer2 to add/remove the class to the body
    if (isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
