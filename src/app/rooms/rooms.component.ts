import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = 'MA Hotel';
  title = 'Room List'
  noOfRooms = 10;
  hide = false;
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;
  

  toggle() {
    this.hide = !this.hide;
    this.title = 'Rooms List'
  }
  ngOnInit() {
    console.log(this.headerComponent)
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe', amenities: 'AC, TV, Fridge',
      price: 1000, photos: 'https://www.google.com',
      checkinTime: new Date('06-Feb-2023'), checkoutTime: new Date('07-Feb-2023')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe', amenities: 'AC, TV, Fridge',
      price: 1000, photos: 'https://www.google.com',
      checkinTime: new Date('05-Feb-2023'), checkoutTime: new Date('06-Feb-2023')
    }

  ]
  rooms: Room = {
    availableRooms: 10, bookedRooms: 5,
    totatRooms: 20
  }
  roomSelected: RoomList | undefined;
  selectedRoom(room: RoomList) {
    this.roomSelected = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Deluxe', amenities: 'AC, TV, Fridge',
      price: 1000, photos: 'https://www.google.com',
      checkinTime: new Date('05-Feb-2023'), checkoutTime: new Date('06-Feb-2023')
    }
    this.roomList = [...this.roomList, room];
  }

  ngDoCheck(): void {
    console.log('Do Check Called')
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Room View';
  }
}
