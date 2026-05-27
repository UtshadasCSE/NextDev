class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} the ${this.species} says: ${this.sound}`;
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Whiskers", "Cat", "Meow");
console.log(dog.makeSound());
console.log(cat.makeSound());
