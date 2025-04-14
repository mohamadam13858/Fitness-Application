import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  standalone: false,
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {

@Output() sidenavCloseEvent = new EventEmitter<void>()


  SidenavClose(){

    this.sidenavCloseEvent.emit()

  }

}
