import {ICaseStatusChangedWallActivity} from '../interfaces/case-status-changed-wall-activity-interface';
import {WallActivityEnum} from '../enums/wall-activity.enum';

export class CaseStatusChangedWallActivity implements ICaseStatusChangedWallActivity {
  public type: WallActivityEnum = WallActivityEnum.CaseStatusChange;

  constructor(
    public id: number,
    public creatorUserId: string,
    public caseId: number,
    public isFavorite: boolean,
    public modificationTimeUnixTimeInMs: number,
    public description: string
  ) {}
}


