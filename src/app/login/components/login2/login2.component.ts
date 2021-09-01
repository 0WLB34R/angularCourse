import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private utilsService:UtilsService) { }

  ngOnInit() {
    this.utilsService.currentData().subscribe(s => console.log(s))
  }

}