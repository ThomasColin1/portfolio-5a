import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @Output("animationHome") animationHome: EventEmitter<any> = new EventEmitter();
  @Output("animationCs") animationCs: EventEmitter<any> = new EventEmitter();
  @Output("animationPersonal") animationPersonal: EventEmitter<any> = new EventEmitter();

  animate(page:string){
    if(page==='cs'){
      this.animationCs.emit()
    }
    if(page==='home'){
      this.animationHome.emit()
    }
    if(page==='personal'){
      this.animationPersonal.emit()
    }
  }
}
