// interface Shape {
//   clone(): Shape;
// }

// class Rectangle implements Shape {
//   public width: number;
//   public height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   clone(): Rectangle {
//     return new Rectangle(this.width, this.height);
//   }
// }

// const rectangle = new Rectangle(10, 20);

// const rectangleClone = rectangle.clone();
// console.log(rectangleClone instanceof Rectangle); // true

// console.log(rectangle, rectangleClone); // false
// console.log(rectangle.width === rectangleClone.width); // true
// console.log(rectangle.height === rectangleClone.height); // true
