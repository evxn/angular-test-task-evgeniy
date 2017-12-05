import { Component, OnInit, Input } from '@angular/core';
import {ICaseCommentWallActivity} from '../../interfaces/case-comment-wall-activity-interface';

@Component({
  selector: 'app-case-wall-comment',
  templateUrl: './case-wall-comment.component.html',
  styleUrls: ['./case-wall-comment.component.scss']
})
export class CaseWallCommentComponent implements OnInit {
  @Input()
  public data: ICaseCommentWallActivity;

  constructor() { }

  ngOnInit() {
  }

}
