import {ICaseCommentWallActivity} from '../interfaces/case-comment-wall-activity-interface';
import {WallActivityEnum} from '../enums/wall-activity.enum';

export class CaseCommentWallActivity implements ICaseCommentWallActivity {
  public type: WallActivityEnum = WallActivityEnum.CaseComment;

  constructor(
    public id: number,
    public creatorUserId: string,
    public caseId: number,
    public isFavorite: boolean,
    public modificationTimeUnixTimeInMs: number,
    public comment: string
  ) {}
}
