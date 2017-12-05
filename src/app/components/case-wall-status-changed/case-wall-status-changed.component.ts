import { Component, OnInit, Input } from '@angular/core';
import {ICaseStatusChangedWallActivity} from '../../interfaces/case-status-changed-wall-activity-interface';

@Component({
  selector: 'app-case-wall-status-changed',
  templateUrl: './case-wall-status-changed.component.html',
  styleUrls: ['./case-wall-status-changed.component.scss']
})
export class CaseWallStatusChangedComponent implements OnInit {
  @Input()
  public data: ICaseStatusChangedWallActivity

  constructor() { }

  ngOnInit() {
  }

}
