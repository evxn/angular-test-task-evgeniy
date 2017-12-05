import { Injectable } from '@angular/core';
import {WallDataService} from './wall-data.service';
import {ICaseCommentWallActivity} from '../interfaces/case-comment-wall-activity-interface';
import {ICaseEvidenceWallActivity} from '../interfaces/case-evidence-wall-activity-interface';
import {ICaseStatusChangedWallActivity} from '../interfaces/case-status-changed-wall-activity-interface';
import {ICaseWallData} from '../interfaces/case-wall-data-interface';
import {WallActivityEnum} from '../enums/wall-activity.enum';
import {CaseWallData} from '../models/case-wall-data';

@Injectable()
export class MockWallDataService implements WallDataService {
  private comments: ICaseCommentWallActivity[];
  private evidences: ICaseEvidenceWallActivity[];
  private statuses: ICaseStatusChangedWallActivity[];

  getData(): ICaseWallData {
    return new CaseWallData(
      this.comments,
      this.evidences,
      this.statuses
    );
  }

  constructor() {
    // noinspection TsLint
    this.comments = [
      {
          id: 0,
          creatorUserId: 'uaaa1',
          type: WallActivityEnum.CaseComment,
          caseId: 100,
          isFavorite: false,
          modificationTimeUnixTimeInMs: 1511271931000,
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum cupiditate dolore ducimus enim facere inventore obcaecati odit quisquam ut. Aliquid amet asperiores error fugit iure mollitia neque quidem sequi ut voluptates.'
        },
        {
          id: 1,
          creatorUserId: 'uaaa2',
          type: WallActivityEnum.CaseComment,
          caseId: 100,
          isFavorite: true,
          modificationTimeUnixTimeInMs: 1511271944000,
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum cupiditate dolore ducimus enim facere inventore obcaecati odit quisquam ut. Aliquid amet asperiores error fugit iure mollitia neque quidem sequi ut voluptates? Autem consectetur cumque doloremque dolores ex harum iste iure labore officia perspiciatis quae quasi quisquam reiciendis similique sit, tenetur velit veritatis vero! Delectus explicabo ipsum nesciunt perferendis provident quaerat quidem rem reprehenderit repudiandae, vitae? A ab accusantium aut commodi deserunt dolorem earum eligendi fugit harum, libero maxime minus nam natus nemo nihil pariatur qui reprehenderit temporibus veritatis vitae. Adipisci hic impedit nihil quia repellat repellendus vero voluptas? Odit?'
        }
      ];

    // noinspection TsLint
    this.evidences = [
        {
          id: 20,
          creatorUserId: 'uaaa1',
          type: WallActivityEnum.CaseEvidence,
          caseId: 100,
          isFavorite: false,
          modificationTimeUnixTimeInMs: 1511271946000,
          evidenceName: 'strong_evidence.txt',
          evidenceId: 200,
          evidenceThumbnailBase64: thumb1,
          fileType: 'txt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum .'
        },
        {
          id: 21,
          creatorUserId: 'uaaa2',
          type: WallActivityEnum.CaseEvidence,
          caseId: 100,
          isFavorite: true,
          modificationTimeUnixTimeInMs: 1511271912000,
          evidenceName: 'just_an_evidence.txt',
          evidenceId: 201,
          evidenceThumbnailBase64: thumb1,
          fileType: 'txt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum cupiditate dolore ducimus enim facere inventore obcaecati odit quisquam ut. Aliquid amet asperiores error fugit iure mollitia neque quidem sequi ut voluptates? Autem consectetur cumque doloremque dolores ex harum iste iure labore officia...'
        }
    ];

    // noinspection TsLint
    this.statuses = [
      {
        id: 30,
        creatorUserId: 'uaaa2',
        type: WallActivityEnum.CaseStatusChange,
        caseId: 100,
        isFavorite: true,
        modificationTimeUnixTimeInMs: 1511271490500,
        description: 'Assigned to John Liberty'
      },
      {
        id: 31,
        creatorUserId: 'uaaa1',
        type: WallActivityEnum.CaseStatusChange,
        caseId: 100,
        isFavorite: false,
        modificationTimeUnixTimeInMs: 1511271943000,
        description: 'Status changed to Reviewed'
      }
    ];
  }
}

// noinspection TsLint
const thumb1 = 'data:image/png;base64,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';

// noinspection TsLint
const thumb2 = 'data:image/gif;base64,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';

