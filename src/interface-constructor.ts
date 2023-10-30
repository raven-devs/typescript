// By using this language feature, you can create more composable objects that don’t rely on inheritance to share code.
// With a constructor on the interface, you can specify that all of your types must have certain methods/properties
// (normal interface compliance) but also control how the types get constructed by typing the interface like you would
// with any other method/property.

// Here, we are creating a strictly typed constructor function with the arguments we need other classes to use,
// but at the same time, allowing it to be generic enough it fits multiple use-cases.

interface Clock {
  tick(): void;
}

// constructor definition
interface ClockConstructor {
  new (hour: number, minute: number): Clock;
}

// factory
function createClock(ctor: ClockConstructor, hour: number, minute: number): Clock {
  return new ctor(hour, minute);
}

class DigitalClock implements Clock {
  constructor(hour: number, minute: number) {}

  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements Clock {
  constructor(hour: number, minute: number) {}

  tick() {
    console.log('tick tock');
  }
}

function main() {
  const digital = createClock(DigitalClock, 12, 17);
  const analog = createClock(AnalogClock, 7, 32);
}

main();

export {};
