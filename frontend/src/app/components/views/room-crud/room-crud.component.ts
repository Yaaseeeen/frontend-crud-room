import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-crud',
  templateUrl: './room-crud.component.html',
  styleUrls: ['./room-crud.component.css']
})
export class RoomCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoomCreate(): void {
    this.router.navigate(['/room/create']);
  }
}
