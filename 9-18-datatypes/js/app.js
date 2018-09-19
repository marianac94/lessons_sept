console.log('yey!');

// Classes - are basically blueprint for an object, they allow us to make multiply instances of an object.
//
// Example, in a game you may have 100 enemies, they all relativly the same
// create an enemy class thtat is a blueprint for all enemies.
//
// defining a class
// creating a blueprint, always with a CAPITAL letter
// constructor method is always called constructor and it is called by js when you institate the class (new class)
class Person {
  constructor(name, eyeColor) {
    this.legs =  2,
    this.arms = 2,
    this.eyes = eyeColor;
    this.name = name;
  }
  greet(otherPerson){
    console.log(`Hi ${otherPerson}!`);
  }
  jump() {
    console.log('weeee');
  }
}

// instatiating a class (INSTATIATING <-- new class)
// creating a project from our blueprint
const bob = new Person('bob', 'green');
// you can edit the properties of our instance on the fly
// the instance is just an object
  bob.eyes = 'orange';
  bob['eyes'] = 'red';
    console.log(bob);

const joan = new Person('joan', 'blue');
  console.log(joan);

// We're creating a new separate class, that inherits all properties in methods from the Person class
class SuperHero extends Person {
  constructor(name, eyeColor, power, age){
    // This is calling the Person constructor and we pass to it what the person constructor needs
    super(name, eyeColor);
    this.superPowers = ['flight', 'x-rays vision', power];
    this.age = age;
  }
  fly(){
    console.log('up up and awayyy!');
  }
  jump(){
    // super is how we refence the parent class
    // this is how you call a method
    super.jump();
    this.fly();
  }
}
  const superman = new SuperHero('Clark Kent', 'blue', 'heat vision', 24);
    console.log(superman);


// Activity 1
// Go ahead and make a pet class, with 3 properties and one method and instaitate to instances
class Pet {
  constructor(animal, color, sound) {
    this.legs = 4;
    this.eyes = 2;
    this.color = color;
    this.animal = animal;
    this.sound = sound;
  }
  petSound(sound) {
    console.log(this.sound);
  }
}
const lab = new Pet('dog', 'yellow', 'woof woof');
const rotweiller = new Pet('dog', 'black', 'meow');

  console.log(lab);
  console.log(rotweiller);

// Activity 2
class Pet {
  constructor(name, type, color) {
    this.legs = 4;
    this.eyes = 2;
    this.name = name;
    this.type = type;
    this.color = color;
  }
  petSound(){
    console.log(this.sound);
  }
}

const flufy = new Pet('flofy', 'bulldog', 'black');
  flufy.color = 'blue';
    console.log(flufy);

const puppy = new Pet('puppy', 'golden retriver', 'brown');
  console.log(puppy);



// Classes (lab)
class Person {
  constructor(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
  }
  greet() {
    console.log('Hi, my name is ' + this.name);
  }
}

const mirza = new Person("Mirza", "5'5", 23);
console.log(mirza);


class Pet extends Person {
  constructor(name, type, color) {
    super(name);
    this.type = type;
    this.color = color;
  }
  dog() {
    console.log('wof wof!');
  }
}

const animal = new Pet("bella", "dog", "black");
console.log(animal);


class Boat extends Person {
  constructor(name, type, color) {
    super(name);
    this.type = type;
    this.color = color;
  }
  sail() {
    console.log('hula hula');
  }
}

const sea = new Boat('Marquez', 'wood', 'pink');
console.log(sea);


class Artist extends Person {
  constructor(name, height, age, genre) {
    super(name, height, age);
    this.genre = genre;
  }
  sing() {
    console.log('la la la');
  }
}

const x = new Artist("Shazad", "6 foot", 25, "rock");
console.log(x);
