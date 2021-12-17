import { Component, Input, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css']
})
export class TimestampsComponent implements OnInit {
  @Input() timeStamps: any = [];
  iterableDiffer

 /*  ngOnChanges() {
    console.log('changed!!');
    console.log(this.timeStamps.length);
    
  } */

  /* ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.timeStamps);
    if(changes) {
      console.log('change detected!!');
      
    }
  } */

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);
   }

  ngOnInit(): void {
  }

}
