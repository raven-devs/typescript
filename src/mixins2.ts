// npx ts-node src/mixins.ts

type Constructor<T = object> = new (...args: any[]) => T;
type Loggable = Constructor<{ print: () => void }>;

function CarWithColor<T extends Loggable>(Base: T) {
  return class extends Base {
    _color: string;

    constructor(...args: any[]) {
      super(...args);
      this._color = '';
    }

    set color(color: string) {
      this._color = color;
    }

    get color(): string {
      return this._color;
    }
  };
}

class Car {
  model = '';

  constructor(name: string) {
    this.model = name;
  }

  print() {
    console.log(this);
  }
}

const CarWithColorConstructor = CarWithColor(Car);

const carWithColor = new CarWithColorConstructor('Ford');
carWithColor.color = 'black';
console.log(carWithColor.color);
carWithColor.print();
