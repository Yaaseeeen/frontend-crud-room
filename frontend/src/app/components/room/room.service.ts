import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Room} from './room.model';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    baseUrl = 'http://localhost:8080/rooms/';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 5000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    create1(room: Room): Observable<Room> {
        return this.http.post<Room>(this.baseUrl, room).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    create(room: Room) {
        console.log('room');
        console.log(room);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers};
        return this.http.post<Room>(`${this.baseUrl}`, JSON.stringify(room), options);
    }

    errorHandler(err: any): Observable<any> {
        this.showMessage('Произошла ошибка! Пожалуйста, попробуйте еще раз', true);
        return EMPTY;
    }

    read(): Observable<Room[]> {
        return this.http.get<Room[]>(this.baseUrl);
    }

    getCountries(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}countries`);
    }

    readById(id: number): Observable<Room> {
        const url = `${this.baseUrl}${id}`
        return this.http.get<Room>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    update(room: Room) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers};
        return this.http.patch<any>(`${this.baseUrl}${room.id}`, JSON.stringify(room), options).toPromise();
    }

    check(id) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers};
        return this.http.patch<any>(`${this.baseUrl}check/${id}`, options).toPromise();
    }

    delete(id: number): Observable<Room> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Room>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }
}
