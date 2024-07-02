"use strict";
// // Implementor interface
// interface DrawingAPI {
//   drawCircle(x: number, y: number, radius: number): void;
// }
// // Concrete Implementor A
// class CanvasAPI implements DrawingAPI {
//   drawCircle(x: number, y: number, radius: number): void {
//     console.log(
//       `Drawing Circle on Canvas at (${x}, ${y}) with radius ${radius}`
//     );
//   }
// }
// // Concrete Implementor B
// class SVGAPI implements DrawingAPI {
//   drawCircle(x: number, y: number, radius: number): void {
//     console.log(`Drawing Circle on SVG at (${x}, ${y}) with radius ${radius}`);
//   }
// }
// // Abstraction
// abstract class Shape {
//   protected drawingAPI: DrawingAPI;
//   constructor(drawingAPI: DrawingAPI) {
//     this.drawingAPI = drawingAPI;
//   }
//   abstract draw(): void;
// }
// // Refined Abstraction
// class Circle extends Shape {
//   private x: number;
//   private y: number;
//   private radius: number;
//   constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
//     super(drawingAPI);
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//   }
//   draw(): void {
//     this.drawingAPI.drawCircle(this.x, this.y, this.radius);
//   }
// }
// // Kullanım
// const canvasAPI = new CanvasAPI();
// const svgAPI = new SVGAPI();
// const circle1 = new Circle(1, 2, 3, canvasAPI);
// const circle2 = new Circle(4, 5, 6, svgAPI);
// circle1.draw();
// circle2.draw();
