import {  Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThreeJsService } from '../three-js.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;

  constructor(private threeJsService: ThreeJsService) {}

  ngAfterViewInit(): void {
    this.threeJsService.init(this.canvasContainer);
  }
}
