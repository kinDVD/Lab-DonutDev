import { Component, Input } from '@angular/core';
import { Complete } from '../../models/dev';

@Component({
  selector: 'tr[app-dev-row]',
  standalone: true,
  imports: [],
  templateUrl: './dev-row.component.html',
  styleUrl: './dev-row.component.css'
})
export class DevRowComponent {
  @Input() DisplayDev:Complete={} as Complete;
}
