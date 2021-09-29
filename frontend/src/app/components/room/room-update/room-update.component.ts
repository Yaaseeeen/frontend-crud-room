import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../room.model';
import {RoomService} from '../room.service';

@Component({
    selector: 'app-room-update',
    templateUrl: './room-update.component.html',
    styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {


    room: Room;
    isTurnOn: boolean;
    isTurnOnOff: string;

    constructor(
        private roomService: RoomService,
        private router: Router,
        private route: ActivatedRoute
    ) {    }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id')
        // this.check(id);
        this.roomService.readById(id).subscribe(room => {
            this.room = room;
            this.isTurnOn = room.turnOn;
            id
            this.isTurnOnOff = this.isTurnOn ? 'Лампочка включена' : 'Лампочка выключена'
        })
    }

    updateRoom(): void {
        this.roomService.update(this.room).then(() => {
            console.log('this.room');
            console.log(this.room);
            this.roomService.showMessage(` "${this.room.name}" Успех!`);
            this.router.navigate(['/room']);
        }).catch(responseError => {
            this.roomService.showMessage(` "${responseError.message}"`);
        })
    }

    cancel(): void {
        this.router.navigate(['/room']);
    }

    turnOnOff() {
        if (!this.isTurnOn) {
            this.isTurnOn = true
            this.room.turnOn = true;
            this.isTurnOnOff = 'Лампочка включена'
        } else {
            this.isTurnOn = false
            this.room.turnOn = false;
            this.isTurnOnOff = 'Лампочка выключена'
        }
    }

    private check(id: number) {
        setTimeout(() => {
            this.roomService.check(id)
                .then()
                .catch(responseError => {
                    this.roomService.showMessage(`"${responseError.message}"`);
                })
        }, 800);
    }
}
