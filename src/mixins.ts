// npx ts-node src/mixins2.ts

class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}

  getPointX() {
    return this.x;
  }

  getPointY() {
    return this.y;
  }
}

class Person {
  constructor(public name: string) {}
}

type Constructor<T> = new (...args: any[]) => T;

function Tagged<T extends Constructor<object>>(Base: T) {
  return class extends Base {
    _tag: string;

    constructor(...args: any[]) {
      super(...args);
      this._tag = '';
    }

    changeTag(newtag: string) {
      this._tag = newtag;
    }
  };
}

const TaggedPoint = Tagged(Point);
const point = new TaggedPoint(10, 20);
point._tag = 'hello';

class Customer extends Tagged(Person) {
  accountBalance: number;
}
const customer = new Customer('Joe');
customer._tag = 'test';
customer.accountBalance = 0;

export {};
