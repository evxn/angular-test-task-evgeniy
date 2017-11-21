import {IBaseWallActivity} from './base-wall-activity-interface';

export interface ICaseEvidenceWallActivity extends IBaseWallActivity{
  evidenceName: string;
  description: string;
  evidenceThumbnailBase64: string;
  evidenceId: number;
  fileType: string;
}
