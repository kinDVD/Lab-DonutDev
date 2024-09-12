import { Component } from '@angular/core';
import { FamousPeopleComponent } from '../famous-people/famous-people.component';
import { Complete } from '../../models/dev';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [FamousPeopleComponent],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css'
})
export class DevComponent {
  DevResult:Complete = {} as Complete;
  constructor(private DevService : DevService){}
  ngOnInit(){
    this.callApi();
  }
  
  
  callApi(){
    this.DevService.getDev().subscribe((response: Complete) => {
      console.log(response);
      this.DevResult = response;
    });
  }
}
