import {ICaseEvidenceWallActivity} from '../interfaces/case-evidence-wall-activity-interface';
import {WallActivityEnum} from '../enums/wall-activity.enum';

export class CaseEvidenceWallActivity implements ICaseEvidenceWallActivity {
  public type: WallActivityEnum = WallActivityEnum.CaseEvidence;

  constructor(
    public id: number,
    public creatorUserId: string,
    public caseId: number,
    public isFavorite: boolean,
    public modificationTimeUnixTimeInMs: number,
    public evidenceName: string,
    public description: string,
    public evidenceThumbnailBase64: string,
    public evidenceId: number,
    public fileType: string,
  ) {}
}
