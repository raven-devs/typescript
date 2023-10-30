// npx ts-node src/discriminated-unions.ts

// When every type in a union contains a common property with literal types, TypeScript considers that to be a
// discriminated union, and can narrow out the members of the union.

class Circle {
  type: 'circle' = 'circle' as const; // common property 'type'
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class Square {
  type: 'square' = 'square' as const; // common property 'type'
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
