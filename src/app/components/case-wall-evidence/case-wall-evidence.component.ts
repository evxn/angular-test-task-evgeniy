import { Component, OnInit, Input } from '@angular/core';
import {ICaseEvidenceWallActivity} from '../../interfaces/case-evidence-wall-activity-interface';

@Component({
  selector: 'app-case-wall-evidence',
  templateUrl: './case-wall-evidence.component.html',
  styleUrls: ['./case-wall-evidence.component.scss']
})
export class CaseWallEvidenceComponent implements OnInit {
  @Input()
  public data: ICaseEvidenceWallActivity;

  constructor() { }

  ngOnInit() {
  }

}
