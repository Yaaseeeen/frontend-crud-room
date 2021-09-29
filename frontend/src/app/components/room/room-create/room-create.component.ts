import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Room} from '../room.model';
import {RoomService} from '../room.service';
import {Country} from "../country.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-room-create',
    templateUrl: './room-create.component.html',
    styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

    countries;
    formGroup: FormGroup;
    room: Room = {
        id: '',
        name: '',
        countryId: null,
        turnOn: false,
        country: new Country
    }

    constructor(private roomService: RoomService, private router: Router) {
    }

    ngOnInit(): void {
        this.roomService.getCountries().subscribe(data => {
            console.log('countries');
            console.log(data);
            this.countries = data;
        })
    }

    createRoom(): void {
        console.log('this.validateForm.controls');
        console.log(this.formGroup?.controls);
        console.log('this.room');
        console.log(this.room);
        this.roomService.create(this.room).subscribe(() => {
            this.roomService.showMessage('Успех!');
            this.router.navigate(['/room']);
        })
    }

    cancel(): void {
        this.router.navigate(['/room'])
    }

}
