import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Output() tiempo = new EventEmitter<any>();

  constructor(private spinerService: NgxSpinnerService) { }

  ngOnInit(): void {


      this.spinerService.show();
      setTimeout(() => {
        this.spinerService.hide();
      },1300);
      this.tiempo.emit(true);


  }






}
