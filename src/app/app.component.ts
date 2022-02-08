import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef})
  public container?: ViewContainerRef;

  constructor() {}

    async load1() {

    const { MyLibComponent } = await import("projects/my-lib/src/feature1");
    this.container!.createComponent(MyLibComponent);

  }

  async load2() {

    const { MyLib2Component } = await import("projects/my-lib/src/feature2");
    this.container!.createComponent(MyLib2Component);
  }
}
