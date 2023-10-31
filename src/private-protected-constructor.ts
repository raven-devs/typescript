// A class with private constructor cannot be instantiated outside the class body, and cannot be extended.
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const e = new Singleton();
const v = Singleton.getInstance();

// A class with protected constructor cannot be instantiated outside the class body, but can be extended.
class BasePerson {
  protected constructor(public name: string) {}

  getName() {
    return this.name;
  }
}

class Person extends BasePerson {
  constructor(public firstName: string) {
    super(firstName);
  }
}

const basePerson = new BasePerson();
const person = new Person('Jack');

export {};
