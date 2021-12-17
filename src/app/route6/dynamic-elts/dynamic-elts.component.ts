import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-elts',
  templateUrl: './dynamic-elts.component.html',
  styleUrls: ['./dynamic-elts.component.css']
})
export class DynamicEltsComponent implements OnInit, AfterViewInit, OnDestroy {
  noOfdivs: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.createElements(6);
  }

  ngAfterViewInit(): void {
    let oldScrollVal, newScrollVal = 0
    document.querySelector('#dynamic-divs')?.addEventListener('click', (event: any) => {
      if (event.target.className) {
        alert(`Button in div ${event.target.getInnerHTML()} clicked!`)
      }
    });

    window.addEventListener('scroll', (event: any) => {
      newScrollVal = window.pageYOffset;
      console.log('New scroll value:', newScrollVal);
      

      if(oldScrollVal < newScrollVal) {
        if(window.pageYOffset > 150 && this.noOfdivs < 60) {
          this.createElements(6);
        }
      }
      oldScrollVal = newScrollVal
    });
  }

  ngOnDestroy(): void {

  }

  createElements(num: number) {
    const PARENT = document.getElementById('dynamic-divs');

    for (let i = 0; i < num; i++) {
      let div = document.createElement('div');
      div.innerHTML = `<button class="buttonClass" type="button"> ${this.noOfdivs}</button>`;
      div.style.cssText = `background-color:lightblue;border-radius:4px;display: flex;align-items: center;justify-content: center; height:200px;width:200px;margin-left: 10px;margin-bottom: 10px;`;
      this.noOfdivs++;
      PARENT.appendChild(div);
    }
  }

}
