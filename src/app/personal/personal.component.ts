import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router){}
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  state='void';

  main = {
    "background": "linear-gradient(to right,#011c24 0%,#011c24 20%,#dbebf1 20%,#dbebf1 100%)"
  }

  async StartAnimation(origin:number,destination:number,url:string){
    this.state='fadeOut';
    await this.delay(500)
    for(let i=0;i<15;i++){

      await this.delay(10);
      console.log(i)
      this.main = {
        "background": "linear-gradient(to right,#011c24 0%,#011c24 "+String(origin-i*(origin-destination)/15)+"%,#dbebf1 "+String(origin-i*(origin-destination)/15)+"%,#dbebf1 100%)"
      }
      // this.transparency = {
      //   "opacity": String(1-i/30)
      // }
    }
    this.router.navigateByUrl(url)
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
  let top = (document.documentElement.scrollTop || document.body.scrollTop)
  let bottom = top + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight-1;
    if(top < 1)   {
      this.scrollable = false;
    //Do your action here
     this.StartAnimation(25,50,'/cs')
    }
  }
}
