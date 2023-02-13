import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {

  @Input() rooms : RoomList[] = [];
  @Input() title : string = '';
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }
}
