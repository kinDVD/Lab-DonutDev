import { Component } from '@angular/core';
import { DevModel } from '../../models/dev';
import { DevService } from '../../services/dev.service';
import { DevRowComponent } from '../dev-row/dev-row.component';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [DevRowComponent],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css'
})
export class DevComponent {
  DevResult:DevModel = {} as DevModel;
  constructor(private devService : DevService){}
  
  ngOnInit(){
    this.callApi();
  }
  
  callApi(){
    this.devService.getDev().subscribe((response: DevModel) => {
      console.log(response);
      this.DevResult = response;
    });
  }
}
