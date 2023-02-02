//car class use for start and stop driving
class Car {
  model: string | undefined;
  year: number | undefined;
  price: string | undefined

  drive() {
    console.log(`car has started driving`);
  }
  stop() {
    console.log(`car has stopped`);
  }
}

//instance of car class
const tesla = new Car();

//assigning values to properties
tesla.model = "Model X";
tesla.price = "$114000";
tesla.year = 2022;

//calling methods
tesla.drive()
tesla.stop()
