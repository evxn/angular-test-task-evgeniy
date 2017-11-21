import {WallActivityEnum} from '../enums/wall-activity.enum';
import {IBaseWallActivity} from '../interfaces/base-wall-activity-interface';

export class BaseWallActivity implements IBaseWallActivity {
  constructor(
    public id: number,
    public creatorUserId: string,
    public type: WallActivityEnum,
    public caseId: number,
    public isFavorite: boolean,
    public modificationTimeUnixTimeInMs: number
  ) {}
}
