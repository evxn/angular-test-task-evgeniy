import { Component, OnInit } from '@angular/core';
import {WallDataService} from '../../services/wall-data.service';
import {MockWallDataService} from '../../services/mock-wall-data.service';
import {UserService} from '../../services/user.service';
import {MockUserService} from '../../services/mock-user.service';
import {ICaseWallData} from '../../interfaces/case-wall-data-interface';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/toArray';

import {IBaseWallActivity} from '../../interfaces/base-wall-activity-interface';

export function wallDataServiceFactory(isProd: boolean): WallDataService {
  return isProd ? new WallDataService() : new MockWallDataService();
}

export function userServiceFactory(isProd: boolean): UserService {
  return isProd ? new UserService() : new MockUserService();
}

@Component({
  selector: 'app-case-wall',
  templateUrl: './case-wall.component.html',
  styleUrls: ['./case-wall.component.scss'],
  providers: [
    {provide: WallDataService, useFactory: wallDataServiceFactory,  deps: ['ENV_IS_PROD']},
    {provide: UserService, useFactory: userServiceFactory,  deps: ['ENV_IS_PROD']}
  ]
})
export class CaseWallComponent implements OnInit {
  data: Observable<IBaseWallActivity[]>;

  constructor(
    private wallDataService: WallDataService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    const data = this.wallDataService.getData();
    // console.log(data.toArray());

    this.data = Observable.from(data.caseCommentWallActivities)
      .merge(
        Observable.from(data.caseEvidenceWallActivities),
        Observable.from(data.caseStatusChangedWallActivities)
      ).map(item => {
        item.creatorUsername = this.userService.getUsername(item.creatorUserId);
        item.creatorAvatar = this.userService.getUserImage(item.creatorUserId);

        return item;
      }).toArray();

    // this.data.subscribe();
  }

}
