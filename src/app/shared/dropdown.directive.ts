import { Directive, ElementRef, HostBinding, HostListener, OnInit, Input } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

//Én megoldásom a menü nyitogatására:
// export class DropdownDirective implements OnInit{
//@Input() defaultClass:boolean=false;
//@Input() setClass:boolean=true;
//@HostBinding('class.open') class:boolean; 
//clickCount:number=1;

  //  constructor(private elRef:ElementRef) { }

 
    //ngOnInit(): void {
     //   this.class=this.defaultClass;
   // }

 // @HostListener('click') clickedOnButton () {
   // this.clickCount++;
   // if(this.clickCount%2==0){
     //   this.class=this.setClass;
       // } 
       // else{
       //     this.class=this.defaultClass;
     //   }
  //  }
//}

export class DropdownDirective {
@HostBinding ('class.open')isOpen=false;

    @HostListener('click') toggleOpen(){
this.isOpen = !this.isOpen;
}
}

//ha azt szeretném, hogy akárhonnan be lehessen zárni a menüt, nemcsak még egy click-el:
//export class DropdownDirective {
//@HostBinding('class.open') isOpen = false;
//@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//}
//constructor(private elRef: ElementRef) {}
//}