import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'personal-component',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // État initial (élément caché)
      state('fadeIn', style({ opacity: 1 })), // État initial (élément caché)
      transition(':enter, :leave', [
        // Transition quand l'élément est inséré ou retiré
        animate('0.5s ease-in-out', style({ opacity: 1 })),
        
    ]),
    ]),
    trigger('fadeOut', [
      state('void', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* => fadeOut', [
        animate('0.5s ease-in-out', style({ opacity: 0 })),
        
    ]),
    ])    
  ]
})
export class PersonalComponent {
  title = 'portfolio-5a';
  constructor(private router:Router, private dialog:MatDialog){}
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  state='void';

  main = {
    "background": "linear-gradient(to right,#004A5E 0%,#004A5E 20%,#d6dde0 20%,#d6dde0 100%)"
  }

  async StartAnimation(origin:number,destination:number,url:string){
    this.state='fadeOut';
    await this.delay(500)
    for(let i=0;i<15;i++){

      await this.delay(10);
      this.main = {
        "background": "linear-gradient(to right,#004A5E 0%,#004A5E "+String(origin-i*(origin-destination)/15)+"%,#d6dde0 "+String(origin-i*(origin-destination)/15)+"%,#d6dde0 100%)"
      }
      // this.transparency = {
      //   "opacity": String(1-i/30)
      // }
    }
    this.router.navigateByUrl(url)
  }

  
  scrollable = false;
  darkWidth=20;

  async ngOnInit() {
    if(window.innerWidth<1200){
      this.darkWidth=40;
      
      this.main = {
       
        "background": "linear-gradient(to right,#004A5E 0%,#004A5E 40%,#d6dde0 40%,#d6dde0 100%)"
      }
    }
    await this.delay(2000);
    this.scrollable = true;
    
  }
  @HostListener('mousewheel', ['$event'])
  onWindowScroll($event:any) {
    if (!this.scrollable){
      return
    }
  //In chrome and some browser scroll is given to body tag
  let top = (document.documentElement.scrollTop || document.body.scrollTop)
  let bottom = top + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight-1;
    if(top < 1 && $event.wheelDeltaY>=7)   {
      this.scrollable = false;
    //Do your action here
     this.StartAnimation(this.darkWidth,50,'/cs')
    }
  }
  onClickImage(){
    this.dialog.open(DialogComponent, {
      width: '80vw',
    });
  }
}
