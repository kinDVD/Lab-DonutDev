import { Component, Input, input } from '@angular/core';
import { Complete } from '../../models/dev';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  @Input() DisplayDev: Complete= {} as Complete;
}
