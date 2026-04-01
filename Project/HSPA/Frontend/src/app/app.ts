import { Component, signal } from '@angular/core';
import { PropertyList } from "./property/property-list/property-list";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HousingService } from './services/housing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, PropertyCard],
  templateUrl: './app.html',
  imports: [ PropertyList, NavBarComponent, RouterOutlet],
  // template : `<h1>Hey I am app component</h1>`,
  styleUrl: './app.css',
  standalone: true,
  providers: [HousingService]
})
export class App {
  protected readonly title = signal('First Angular App');
}
