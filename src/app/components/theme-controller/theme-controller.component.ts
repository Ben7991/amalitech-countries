import { Component, OnInit, Renderer2 } from '@angular/core';
import { Theme, ThemeControllerService } from 'src/app/shared/theme-controller.service';

@Component({
  selector: 'app-theme-controller',
  styleUrls: ['./theme-controller.component.css'],
  template: `
    <div class="d-flex align-items-center gap-1 mode-text" role="button"
      (click)="onToggleTheme()">
      <span class="material-symbols-outlined">
        dark_mode
      </span>
      <p class="m-0">Dark Mode</p>
    </div>
  `
})
export class ThemeControllerComponent {

  constructor(private themeService: ThemeControllerService) { }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
