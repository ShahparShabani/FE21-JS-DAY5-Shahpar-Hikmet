class Car {
    type;
    brand;
    model;
    color;
    img;

    constructor(type, brand, model, color, img) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.img = img;
    }

    carInfo() {
        return`<div class="col-4"><div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand}</h5>
          <p class="card-text"> Type: ${this.type} </br> Model: ${this.model} <br/> Color: ${this.color}</p>
        </div>
        </div>
      </div>`;
    }

}

class Motorbike extends Car {
    wheels;

    constructor(type, brand, model, color, img, wheels) {
      super(type, brand, model, color, img)
        this.wheels = wheels;

    }

    motorbikeInfo() {
        return`<div class="col-4"> <div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand}</h5>
          <p class="card-text"> Type: ${this.type} </br> Model: ${this.model} <br/> Color: ${this.color}
          <br/> Wheels: ${this.wheels}
          </p>
        </div>
        </div>
      </div>`;
    }

} 

class Animal {
    type;
    name;
    sound;
    img;

    constructor(type, name, sound, img) {
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.img = img;
    }

    animalInfo() {
        return `<div class="col-4"><div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text"> Type: ${this.type} <br/> Sound: ${this.sound}  </p>
        </div>
        </div>
      </div>`;
    }
}

class Fish extends Animal {
    waterType;

    constructor(type, name, sound, img, waterType) {
        super(type, name, sound, img)
        this.waterType = waterType;
    }

    fishInfo() {
        return `<div class="col-4"> <div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text"> Type: ${this.type} <br/> Sound: ${this.sound} <br/> Type of whater: ${this.waterType}  </p>
        </div>
        </div>
      </div>`;
    }

}

class Person {
    fName;
    lName;
    gender;
    img;

    constructor(fName, lName, gender, img) {
        this.fName = fName;
        this.lName = lName;
        this.gender = gender;
        this.img = img;
    }

    personInfo() {
        return `<div class="col-4"><div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fName}  ${this.lName}</h5>
          <p class="card-text"> Gnder: ${this.gender}</p>
        </div>
      </div> </div>`;
    }
}

class Profession extends Person {
    job;

    constructor(fName, lName, gender, img, job) {
        super(fName, lName, gender, img);
        this.job = job;
    }

    professionInfo() {
        return `<div class="col-4"><div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fName}  ${this.lName}</h5>
          <p class="card-text"> Gnder: ${this.gender}<br/>
           Job: ${this.job}</p>
        </div>
      </div></div>`;
    }


}

let pesrsonsWrapper = document.getElementById("persons-wrapper");
let carsWrapper = document.getElementById("cars-wrapper");
let animalsWrapper = document.getElementById("animals-wrapper");

function addPerson(fName, lName, gender, img) {
    pesrsonsWrapper.innerHTML += new Person(fName, lName, gender, img).personInfo();
}

function addPersonWithJob(fName, lName, gender, img, job) {
    pesrsonsWrapper.innerHTML += new Profession(fName, lName, gender, img ,job).professionInfo();
}

function addCar(type, brand, model, color, img) {
    carsWrapper.innerHTML += new Car(type, brand, model, color, img).carInfo();
}

function addMotorbike(type, brand, model, color, img, wheels) {
    carsWrapper.innerHTML += new Motorbike(type, brand, model, color, img, wheels).motorbikeInfo();
}

function addAnimal(type, name, sound, img) {
    animalsWrapper.innerHTML += new Animal(type, name, sound, img).animalInfo();
}

function addFish(type, name, sound, img, waterType) {
    animalsWrapper.innerHTML += new Fish(type, name, sound, img, waterType).fishInfo();
}

addPerson("Shahpar", "Shabani", "Female", "../img/pt-f.png");
addPerson("John", "Doe", "Male", "../img/pt-m.png");
addPerson("Jane", "Doe", "Female", "../img/pt-f.png");


addPersonWithJob("Shahpar", "Shabani", "Female", "../img/pt-f.png", "Developer");
addPersonWithJob("John", "Doe", "Male",  "../img/pt-m.png", "Teacher");
addPersonWithJob("Jane", "Doe", "Female", "../img/pt-f.png", "Doctor");

addCar("Shahpar", "Honda", "Sedan", "Blue", "../img/car-sedan.jpeg");
addCar("John", " Mercedes-Benz", "Coupe", "Red", "../img/car-11.jpeg");
addCar("Jane", "Porsche", "Sport", "Red", "../img/car-sport.jpeg");


addMotorbike("Shahpar", "Honda", "Sedan", "Blue", "../img/car-sedan.jpeg", "4");
addMotorbike("John", " Mercedes-Benz", "Coupe", "Red", "../img/car-11.jpeg", "4");
addMotorbike("Jane", "Porsche", "Sport", "Red", "../img/car-sport.jpeg", "4");

addAnimal("Dog", "German", "Bark", "../img/dog-t-2.png");
addAnimal("Cat", "Persian", "Mio", "../img/cat-1.png");
addAnimal("Dog", "Pomeranien", "Bark", "../img/dog-1.png");

addFish("Fish", "Goldfish", "", "../img/fish-1.jpeg", "Souer");
addFish("Fish", "Guppy", "",  "../img/fish-2.jpeg", "Sweet");
addFish("Fish", "Neon", "", "../img/fish-3.jpeg", "Ocean");