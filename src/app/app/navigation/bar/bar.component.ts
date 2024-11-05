import { Component } from '@angular/core';
import { SelectionComponent } from "../selection/selection.component";

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [SelectionComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  //fetch pokemon data
}
