import {Component, Input, OnInit} from '@angular/core';
import {HttpStatusUtil} from '../../utils/http-status.util';

@Component({
  selector: 'app-http-status',
  templateUrl: './http-status.component.html',
  styleUrls: ['./http-status.component.scss']
})
export class HttpStatusComponent implements OnInit {

  constructor() { }
  @Input() status: HttpStatusUtil = HttpStatusUtil.getNewInstance();
  ngOnInit(): void {
  }

}
