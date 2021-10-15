import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-httpclient-app';

  public getScreenWidth: any;
  public getScreenHeight: any;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event']) // Detect Width and Height of Screen

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  counter = 0;
  @HostListener('window:keydown', ['$event']) // Detect number of keydown
  handleKeyDown() {
    this.counter++;
    //console.log(this.counter);
  }
  resetCounter() {
    this.counter = 0;
    //console.log(this.counter);
  }
}