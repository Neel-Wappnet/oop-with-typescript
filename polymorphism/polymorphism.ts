//Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations
// those that behave differently depending on their applied argument types ==> ad-hoc polymorphisms
// those that take a variable number of arguments ==> variadic functions

class Car {
  model: string

  constructor(model: string) {
    this.model = model
  }

  displayDetail(): void {
    console.log(`Model of car is ${this.model}`)
  }
}

class SportsCar extends Car {
  model: string
  speed: number
  constructor(model: string, speed: number) {
    super(model)
    this.model = model;
    this.speed = speed
  }

  displayDetail(): void {
    console.log(`Model name of car is ${this.model} and speed of car is ${this.speed}`);
  }
}

class LucxuryCar extends Car {
  model: string
  speed: number
  facilities: Array<string>

  constructor(model: string, speed: number, facilities: string[]) {
    super(model)
    this.model = model;
    this.speed = speed;
    this.facilities = facilities
  }

  displayDetail(): void {
    console.log(`Model name of car is ${this.model} and speed of car is ${this.speed} and facilities are ${this.facilities.join(", ")}`);
  }
}

const cars: Car[] = [
  new SportsCar("Porsche 911", 200),
  new LucxuryCar("BMW X1", 160, ['Leather seats', 'Sunroof', 'Autopilot'])
]

cars.forEach(car => car.displayDetail())