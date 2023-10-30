// `InstanceType` obtains the return type of a constructor function type.
class Point {
  createdAt: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.createdAt = Date.now();
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>;

function moveRight(point: PointInstance) {
  point.x += 5;
}

const point = new Point(3, 4);
moveRight(point);
point.x; // => 8

// `ConstructorParameters` constructs a tuple or array type from the types of a constructor function type. It produces a
// tuple type with all the parameter types (or the type never if Type is not a function).
type CtorParamsError = ConstructorParameters<ErrorConstructor>;
class C {
  constructor(a: number, b: string) {}
}
type CtorParamsC = ConstructorParameters<typeof C>;
type CtorParamsAny = ConstructorParameters<any>;

// `Parameters` extracts the parameter types of a function type as an array.
type PointPrinterFn = (p: { x: number; y: number }) => void;
const pointParam: Parameters<PointPrinterFn>[0] = {
  x: 10,
  y: 20,
};

// `ReturnType` extracts the return type of a function type.
type PointGeneratorFN = () => { x: number; y: number };
const pointReturn: ReturnType<PointGeneratorFN> = {
  x: 10,
  y: 20,
};

// `Exclude` removes types from a union.
type Primitive = string | number | boolean;
const numberOrBoolean: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// `NonNullable` constructs a type by excluding `null` and `undefined` from Type
type NoneNullable0 = NonNullable<string | number | undefined>;
type NoneNullable1 = NonNullable<string[] | null | undefined>;

// `Omit` removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const personWithName: Omit<Person, 'age' | 'location'> = {
  name: 'Jack',
};

// `Pick` removes all but the specified keys from an object type.
const personWithNameAndLocation: Pick<Person, 'name' | 'location'> = {
  name: 'Jack',
  location: 'Boston',
};

// `Partial` changes all the properties in an object to be optional.
const partialPerson: Partial<Person> = {};
partialPerson.name = 'Jack';

// `Required` changes all the properties in an object to be required.
const requiredPerson: Required<Person> = {
  name: 'Jack',
  age: 22,
  location: 'Boston',
};

// `Readonly` is used to create a new type where all properties are readonly, meaning they cannot be modified once
// assigned a value.
const readonlyPerson: Readonly<Person> = {
  name: 'Jack',
  age: 35,
};
readonlyPerson.name = 'Johne';

export {};
