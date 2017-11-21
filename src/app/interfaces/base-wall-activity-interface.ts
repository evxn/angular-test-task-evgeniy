import {WallActivityEnum} from '../enums/wall-activity.enum';

export interface IBaseWallActivity {
  id: number;
  creatorUserId: string;
  type: WallActivityEnum;
  caseId: number;
  isFavorite: boolean;
  modificationTimeUnixTimeInMs: number;
}
