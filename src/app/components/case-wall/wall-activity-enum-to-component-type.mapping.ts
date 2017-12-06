import {CaseWallCommentComponent} from '../case-wall-comment/case-wall-comment.component';
import {CaseWallEvidenceComponent} from '../case-wall-evidence/case-wall-evidence.component';
import {CaseWallStatusChangedComponent} from '../case-wall-status-changed/case-wall-status-changed.component';
import {WallActivityEnum} from '../../enums/wall-activity.enum';

export const wallActivityEnum2ComponentTypeMapping = {
  [WallActivityEnum.CaseComment]: CaseWallCommentComponent,
  [WallActivityEnum.CaseEvidence]: CaseWallEvidenceComponent,
  [WallActivityEnum.CaseStatusChange]: CaseWallStatusChangedComponent
};
