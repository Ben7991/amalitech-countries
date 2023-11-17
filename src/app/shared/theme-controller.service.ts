import { Injectable, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

export type Theme = "light-mode" | "dark-mode";

@Injectable({
  providedIn: 'root'
})
export class ThemeControllerService {
  theme: Theme = "light-mode";
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    if (!localStorage.getItem("theme")) {
      this.resetTheme();
    } else {
      this.renderer.removeClass(document.body, this.theme);
      this.theme = <Theme>localStorage.getItem("theme");
      this.resetTheme();
    }
  }

  private resetTheme() {
    this.renderer.addClass(document.body, this.theme);
    localStorage.setItem("theme", this.theme);
  }

  toggleTheme() {
    let newTheme: Theme;
    if (this.theme === "light-mode")
      newTheme = "dark-mode";
    else
      newTheme = "light-mode";

    this.renderer.removeClass(document.body, this.theme);
    this.theme = newTheme;
    this.resetTheme();
  }
}
