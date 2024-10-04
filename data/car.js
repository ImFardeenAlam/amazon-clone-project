class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model} ${this.speed} ${this.isTrunkOpen}`)
  }

  go(){
    if(this.speed >= 0 && this.speed <=200 && this.isTrunkOpen === false){
      this.speed += 5;
      this.displayInfo();
    } else {
    console.log('The speed limit should be limited between 0 and 200 and the trunk should be closed while driving');
    }

  }

  brake(){
    if(this.speed > 0 && this.speed <=200){
      this.speed -= 5;
      this.displayInfo();
    } else {
    console.log('The speed limit should be limited between 0 and 200');
    }
  }

  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true;
      this.displayInfo();
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
    this.displayInfo();
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed += this.acceleration;

    if(this.speed > 300){
      this.speed = 300;
    }
  }

  openTrunk(){
    console.log('Race cars do not have a trunk');
  }

  closeTrunk(){
    console.log('Race cars do not have a trunk');
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});
const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
})



console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();

car1.go();
car1.go();
car1.go();
car1.brake();
car1.brake();
car1.brake();

car1.openTrunk();
car1.closeTrunk();
car1.openTrunk();
car1.go();
car1.closeTrunk();
car1.go();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();