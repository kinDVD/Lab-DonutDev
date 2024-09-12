import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DevComponent } from './components/dev/dev.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutComponent, DevComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab-Donuts';
}
