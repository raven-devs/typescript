// When using class inheritance, we do not want the base class to be instantiated, so we can use TypeScript’s abstract
// keyword to modify a class to mean that it is an abstract class that can only be implemented, not instantiated.

abstract class Animal {
  a(): void {}
}

class Dog extends Animal {
  a() {}
}

new Animal().a();
