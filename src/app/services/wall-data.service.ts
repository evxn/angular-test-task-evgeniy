import { Injectable } from '@angular/core';
import {ICaseWallData} from '../interfaces/case-wall-data-interface';
import {CaseWallData} from '../models/case-wall-data';

@Injectable()
export class WallDataService {
  getData(): ICaseWallData {
    return new CaseWallData();
  }
}
