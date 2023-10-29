// `Partial` changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

const pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// `Required` changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

const myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000, // `Required` forces mileage to be defined
};

export {};
