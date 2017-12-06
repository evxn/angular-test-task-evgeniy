import { Component, Input } from '@angular/core';
import { wallActivityEnum2ComponentTypeMapping } from './wall-activity-enum-to-component-type.mapping';
import { IBaseWallActivity } from '../../interfaces/base-wall-activity-interface';

@Component({
  selector: 'app-case-wall',
  templateUrl: './case-wall.component.html',
  styleUrls: ['./case-wall.component.scss'],
})
export class CaseWallComponent {
  @Input() public data: IBaseWallActivity[];

  wallActivityEnum2ComponentTypeMapping = wallActivityEnum2ComponentTypeMapping;
}
