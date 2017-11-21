import {ICaseCommentWallActivity} from './case-comment-wall-activity-interface';
import {ICaseEvidenceWallActivity} from './case-evidence-wall-activity-interface';
import {ICaseStatusChangedWallActivity} from './case-status-changed-wall-activity-interface';

export interface ICaseWallData {
  caseCommentWallActivities: ICaseCommentWallActivity[];
  caseEvidenceWallActivities: ICaseEvidenceWallActivity[];
  caseStatusChangedWallActivities: ICaseStatusChangedWallActivity[];
}
