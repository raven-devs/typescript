// npx ts-node src/type-predicate.ts

class Fish {
  swim() {
    console.log('A fish is swimming');
  }
}

class Bird {
  fly() {
    console.log('A bird is flying');
  }
}

// type predicate
function isFish(pet: Fish | Bird): pet is Fish {
  console.log((pet as Fish).swim);

  return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5 ? new Fish() : new Bird();
}

function main() {
  const pet = getSmallPet();
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

main();

export {};
