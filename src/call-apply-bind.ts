// npx ts-node src/call-apply-bind.ts

// With the call() method, you can write a method that can be used on different objects.
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function (city: string, country: string) {
    return this ? this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country : 'this is undefined';
  },
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

const args: [string, string] = ['Berlin', 'Germany'];

const person1FullName = person1.fullName(...args);
console.log({ person1FullName });

const person2FullNameFromPerson1Obj = person1.fullName.call(person2, ...args);
console.log({ person2FullNameFromPerson1Obj });

// With the apply() method, you can write a method that can be used on different objects.
// The difference between call() and apply(): the apply() method takes arguments as an array.
const person2FullNameFromPerson1ObjApply = person1.fullName.apply(person2, args);
console.log({ person2FullNameFromPerson1ObjApply });

// With the bind() method, an object can borrow a method from another object (callback function).
const fullNameCbWithAnotherObj = person1.fullName.bind(person2);
const fullNameCbWithAnotherObjResult = fullNameCbWithAnotherObj(...args);
console.log({ fullNameCbWithAnotherObjResult });

// When a function is used as a callback, `this` is lost. The bind() method solves this problem.
const fullNameCbWithoutBind = person1.fullName;
const fullNameCbWithBind = person1.fullName.bind(person1);
setTimeout(() => {
  const fullNameCbWithoutBindResult = fullNameCbWithoutBind(...args);
  console.log({ fullNameCbWithoutBindResult });

  const fullNameCbWithBindResult = fullNameCbWithBind(...args);
  console.log({ fullNameCbWithBindResult });
}, 3000);

export {};
