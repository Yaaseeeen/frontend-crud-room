import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import {RoomCreateComponent} from "./components/room/room-create/room-create.component";
import {RoomUpdateComponent} from "./components/room/room-update/room-update.component";
import {RoomDeleteComponent} from "./components/room/room-delete/room-delete.component";
import {RoomCrudComponent} from "./components/views/room-crud/room-crud.component";


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"room",
    component: RoomCrudComponent
  },
  {
    path:"room/create",
    component: RoomCreateComponent
  },
  {
    path:"room/update/:id",
    component: RoomUpdateComponent
  },
  {
    path:"room/delete/:id",
    component: RoomDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
