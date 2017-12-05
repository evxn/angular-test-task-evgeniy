import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() public set isFavorite(val: boolean) {
    this._isFavorite = val;
    this.isFavoriteChange.emit(val);
  }
  public get isFavorite():boolean {
    return this._isFavorite;
  }

  @Output() public isFavoriteChange: EventEmitter<boolean> = new EventEmitter();

  private _isFavorite: boolean;

  toggle() {
    this.isFavorite = !this.isFavorite;
  }
}
