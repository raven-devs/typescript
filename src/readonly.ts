// readonly array
const names: readonly string[] = ['Dylan'];
names.push('Jack');

// readonly class prop
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    this.name = 'new name';
    return this.name;
  }
}

const person = new Person('Jane');
console.log(person.getName());

// readonly interface prop
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = 'hello';
}

export {};
