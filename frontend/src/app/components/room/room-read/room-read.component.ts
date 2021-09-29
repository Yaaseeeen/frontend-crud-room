import {Component, OnInit} from '@angular/core';
import {Room} from '../room.model';
import {RoomService} from '../room.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-room-read',
    templateUrl: './room-read.component.html',
    styleUrls: ['./room-read.component.css']
})
export class RoomReadComponent implements OnInit {



    room: Room[];
    displayedColumns = ['id', 'name', 'country', 'turnOn', 'action'];

    constructor(private roomService: RoomService,public router: Router,) {
    }

    ngOnInit(): void {
        this.roomService.read().subscribe(room => {
            this.room = room;
        })
        this.roomService.getCountries().subscribe(room => {
            console.log('room');
            console.log(room);
        })
    }

    sss(id) {
        // this.router.navigate([`/room/update/id]);
        this.check(id)
            // this.router.navigate([`/room/update/${id}`]);
    }

    private check(id: number) {
        setTimeout(() => {
            this.roomService.check(id)
                .then((res)=> {
                    console.log('res');
                    console.log(res);
                    // this.roomService.showMessage(`"resss"`)
                    this.router.navigate([`/room/update/${id}`]);
                })
                .catch(responseError => {
                    console.log('responseError');
                    console.log(responseError);
                    this.roomService.showMessage(`"${responseError.error.message}"`);
                })
        }, 800);
    }
}
