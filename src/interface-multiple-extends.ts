// an interface can extend one or more other interfaces
// a class can extend only one other class
// a class can implement one or more interfaces

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};

export {};
