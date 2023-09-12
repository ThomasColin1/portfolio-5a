import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('0.5s ease-in-out', style({ opacity: 1 })),
        
    ]),
    ]),
    trigger('fadeOut', [
      state('void', style({ opacity: 1 })),
      transition('* => fadeOut', [
        animate('0.5s ease-in-out', style({ opacity: 0 })),
        
    ]),
    ])
  ]
})
export class HomeComponent {
  title = 'portfolio-5a';
  state='void';
  main = {
    "background": "linear-gradient(to right,#004A5E 0%,#004A5E 65%,#d6dde0 65%,#d6dde0 100%)"
  }
  // transparency = {
  //   "opacity":"1"
  // }

  constructor(private router:Router){}

  async StartAnimation(origin:number,destination:number,url:string){
    this.state='fadeOut';
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  scrollable = false;
  personalDarkWidth=20;
  async ngOnInit() {
    await this.delay(2000);
    this.scrollable = true;
    
    if(window.innerWidth<1200){
      this.personalDarkWidth=40;
    }
  }

  @HostListener('mousewheel', ['$event'])
  onWindowScroll($event:any) {
    // console.log($event)
    if (!this.scrollable){
      return
    }
  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight-10;
  // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
   if(pos > max && $event.wheelDeltaY<=-7){
   //Do your action here
    this.scrollable = false;
    this.StartAnimation(65,50,'/cs')
   }
  }
}
