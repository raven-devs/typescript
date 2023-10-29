// interface can extend one or more interfaces
// class can extend only one class
// class can implement one or more interfaces

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
