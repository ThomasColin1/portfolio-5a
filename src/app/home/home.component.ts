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
    "background": "linear-gradient(to right,#011c24 0%,#011c24 65%,#dbebf1 65%,#dbebf1 100%)"
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
        "background": "linear-gradient(to right,#011c24 0%,#011c24 "+String(origin-i*(origin-destination)/15)+"%,#dbebf1 "+String(origin-i*(origin-destination)/15)+"%,#dbebf1 100%)"
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
  async ngOnInit() {
    await this.delay(1000);
    this.scrollable = true;
  }

  @HostListener('mousewheel', ['$event'])
  onWindowScroll() {
    if (!this.scrollable){
      return
    }
  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight-10;
  // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
   if(pos > max)   {
   //Do your action here
    this.scrollable = false;
    this.StartAnimation(65,50,'/cs')
   }
  }
}
