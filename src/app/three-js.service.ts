import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThreeJsService {
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private matrixColumns!: number[];
  private fontSize = 16;

  init(container: ElementRef): void {
    // Create Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    container.nativeElement.appendChild(this.canvas);

    this.context = this.canvas.getContext('2d')!;
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Create columns for the Matrix effect
    this.matrixColumns = Array(Math.floor(this.canvas.width / this.fontSize)).fill(0);

    // Start the animation
    this.animate();

    // Handle resize
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.matrixColumns = Array(Math.floor(this.canvas.width / this.fontSize)).fill(0);
    });
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    // Semi-transparent background to create fade effect
    this.context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Text color and font
    this.context.fillStyle = '#00ff00';
    this.context.font = `${this.fontSize}px monospace`;

    this.matrixColumns.forEach((y, index) => {
      // Generate random 0 or 1
      const text = Math.random() > 0.5 ? '1' : '0';

      // Draw text
      this.context.fillText(text, index * this.fontSize, y * this.fontSize);

      // Randomly reset column to create falling effect
      if (y * this.fontSize > this.canvas.height && Math.random() > 0.95) {
        this.matrixColumns[index] = 0;
      }

      // Move the column down
      this.matrixColumns[index]++;
    });
  };
}
