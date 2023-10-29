// npx ts-node src/discriminated-unions.ts

class Circle {
  type: 'circle' = 'circle' as const;
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class Square {
  type: 'square' = 'square' as const;
  sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }
}

type Shape = Circle | Square;

function calculate(shape: Shape) {
  if (shape.type === 'circle') {
    return shape.radius;
  } else {
    return shape.sideLength;
  }
}

function main() {
  const shape1 = new Circle(12);
  console.log(calculate(shape1));

  const shape2 = new Square(7);
  console.log(calculate(shape2));
}

main();

export {};
