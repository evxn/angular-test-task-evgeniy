import { Component, OnInit } from '@angular/core';
import { WallDataService } from '../../services/wall-data.service';
import { UserService } from '../../services/user.service';
import { IBaseWallActivity } from '../../interfaces/base-wall-activity-interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-case-wall-container',
  templateUrl: './case-wall-container.component.html',
  styleUrls: ['./case-wall-container.component.scss']
})
export class CaseWallContainerComponent implements OnInit {
  data$: Observable<IBaseWallActivity[]>;

  constructor(
    private wallDataService: WallDataService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    const wallData = this.wallDataService.getData();

    this.data$ = Observable.from(wallData.caseCommentWallActivities)
      .merge(
        Observable.from(wallData.caseEvidenceWallActivities),
        Observable.from(wallData.caseStatusChangedWallActivities)
      ).map(item => {
        item.creatorUsername = this.userService.getUsername(item.creatorUserId);
        item.creatorAvatar = this.userService.getUserImage(item.creatorUserId);

        return item;
      }).toArray();
  }
}
