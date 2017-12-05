import {WallActivityEnum} from '../enums/wall-activity.enum';

export interface IBaseWallActivity {
  id: number;
  type: WallActivityEnum;
  caseId: number;
  isFavorite: boolean;
  modificationTimeUnixTimeInMs: number;
  creatorUserId: string;
  creatorAvatar?: string;
  creatorUsername?: string;
}
