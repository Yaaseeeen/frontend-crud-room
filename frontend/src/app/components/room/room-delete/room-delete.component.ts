import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.css']
})
export class RoomDeleteComponent implements OnInit {

  room: Room;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.readById(id).subscribe((room) => {
      this.room = room;
    })
  }

  // deleteRoom(): void {
  //   this.roomService.delete(this.room.id).subscribe(() => {
  //     this.roomService.showMessage(`Pessoa "${this.room.name}" excluída com sucesso!`);
  //     this.router.navigate(['/room']);
  //   })
  // }

  cancel(): void {
    this.router.navigate(['/room']);
  }
}
