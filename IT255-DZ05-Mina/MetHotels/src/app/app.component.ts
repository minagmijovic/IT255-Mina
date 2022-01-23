import { Component, OnInit } from '@angular/core';
import { Room } from './modules/Room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MetHotels';

  rooms: Room[];
  userPrice: string = "";
  
  constructor() {    
    this.rooms = [
      new Room("12B", "Grand", 3, 200),
      new Room("37D", "Hilton", 9, 150),
      new Room("42F", "Paladis", 10, 1000),
      new Room("5A", "Srna", 6, 280),
    ];
  }

  ngOnInit(): void {
      
  }

  addRoom(roomNumber: HTMLInputElement, naziv: HTMLInputElement, availablePpl: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room, room number: ${roomNumber.value} and name: ${naziv.value}`);
    this.rooms.push(new Room(roomNumber.value, naziv.value, Number(availablePpl.value), Number(price.value)));
    roomNumber.value = '';
    naziv.value = '';
    availablePpl.value = '';
    price.value = '';
    return false;
  }

  shuffle(array: Room[]): boolean {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return false;
  }
  trackByFn(customParam: any, index: any, item: any) {
    return item[customParam];
  }

  search() {

    if (this.userPrice != "") {
      this.rooms = this.rooms.filter(res => {
        console.log(res.price.toString());
        console.log("User: ", this.userPrice);
        return res.price.toString().toLocaleLowerCase().match(this.userPrice.toLocaleLowerCase());
      })

    } else {
      this.ngOnInit();

    }
  }


}

