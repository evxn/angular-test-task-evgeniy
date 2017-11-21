import {ICaseWallData} from '../interfaces/case-wall-data-interface';
import {ICaseStatusChangedWallActivity} from '../interfaces/case-status-changed-wall-activity-interface';
import {ICaseEvidenceWallActivity} from '../interfaces/case-evidence-wall-activity-interface';
import {ICaseCommentWallActivity} from '../interfaces/case-comment-wall-activity-interface';

export class CaseWallData implements ICaseWallData {
  constructor(
    public caseCommentWallActivities: ICaseCommentWallActivity[] = [],
    public caseEvidenceWallActivities: ICaseEvidenceWallActivity[] = [],
    public caseStatusChangedWallActivities: ICaseStatusChangedWallActivity[] = []
  ) { }
}
