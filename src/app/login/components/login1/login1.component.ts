import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  index=0;

  constructor(private utilsService:UtilsService) { }

  ngOnInit() {
  
  }

  onSend():void{
    this.utilsService.setData(this.index++);
  }


}