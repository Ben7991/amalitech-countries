import { Component, OnInit } from '@angular/core';
import { ThemeControllerService } from './shared/theme-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private themeController: ThemeControllerService) { }

  ngOnInit(): void {
    this.themeController.initializeTheme();
  }
}
