import { Component, OnInit, Input } from '@angular/core';
import {IBaseWallActivity} from '../../interfaces/base-wall-activity-interface';

@Component({
  selector: 'app-case-wall-item',
  templateUrl: './case-wall-item.component.html',
  styleUrls: ['./case-wall-item.component.scss']
})
export class CaseWallItemComponent implements OnInit {
  @Input()
  public data: IBaseWallActivity;

  constructor() { }

  ngOnInit() {
  }


}
