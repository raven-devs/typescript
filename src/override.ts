/**
 * When a method on a child class is marked with override, TypeScript will always make sure that a method with the same
 * name exists in a the base class.
 */

abstract class Animal {
  sleep() {
    // some default logic
  }

  eat() {
    // some default logic
  }
}

class Dog extends Animal {
  override sleep() {
    // some new logic
  }

  // Error! The method `run` does not exist in the parent class!
  override run() {
    // some new logic
  }
}

export {};
