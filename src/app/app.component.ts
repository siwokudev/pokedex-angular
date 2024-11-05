import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationModule } from './app/navigation/navigation.module';
import { SelectionComponent } from "./app/navigation/selection/selection.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex-angular';
}
