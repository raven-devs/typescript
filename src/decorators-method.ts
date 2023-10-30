// npx ts-node src/decorators-method.ts

function LogMethod(header = '[LOG]:') {
  return function loggedMethod<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
  ) {
    const methodName = String(context.name);

    function replacementMethod(this: This, ...args: Args): Return {
      console.log(`${header} Entering method '${methodName}'.`);
      const result = target.call(this, ...args);
      console.log(`${header} Exiting method '${methodName}'.`);
      return result;
    }

    return replacementMethod;
  };
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @LogMethod('⚠️')
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person('Ron');
p.greet();

export {};
