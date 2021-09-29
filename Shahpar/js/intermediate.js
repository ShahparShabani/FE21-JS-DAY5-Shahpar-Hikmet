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
        return `<div class="col-4"><div class="card pCard" style="width: 18rem;">
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
        return `<div class="col-4"> <div class="card pCard" style="width: 18rem;">
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


pesrsonsWrapper.innerHTML += new Person("Shahpar", "Shabani", "Female", "../img/pt-f.png").personInfo();
pesrsonsWrapper.innerHTML += new Person("John", "Doe", "Male", "../img/pt-m.png").personInfo();
pesrsonsWrapper.innerHTML += new Person("Jane", "Doe", "Female", "../img/pt-f.png").personInfo();


pesrsonsWrapper.innerHTML += new Profession("Shahpar", "Shabani", "Female", "../img/pt-f.png", "Developer").professionInfo();
pesrsonsWrapper.innerHTML += new Profession("John", "Doe", "Male", "../img/pt-m.png", "Teacher").professionInfo();
pesrsonsWrapper.innerHTML += new Profession("Jane", "Doe", "Female", "../img/pt-f.png", "Doctor").professionInfo();

carsWrapper.innerHTML += new Car("Shahpar", "Honda", "Sedan", "Blue", "../img/car-sedan.jpeg").carInfo();
carsWrapper.innerHTML += new Car("John", " Mercedes-Benz", "Coupe", "Red", "../img/car-11.jpeg").carInfo();
carsWrapper.innerHTML += new Car("Jane", "Porsche", "Sport", "Red", "../img/car-sport.jpeg").carInfo();


carsWrapper.innerHTML += new Motorbike("Shahpar", "Honda", "Sedan", "Blue", "../img/car-sedan.jpeg", "4").motorbikeInfo();
carsWrapper.innerHTML += new Motorbike("John", " Mercedes-Benz", "Coupe", "Red", "../img/car-11.jpeg", "4").motorbikeInfo();
carsWrapper.innerHTML += new Motorbike("Jane", "Porsche", "Sport", "Red", "../img/car-sport.jpeg", "4").motorbikeInfo();

animalsWrapper.innerHTML += new Animal("Dog", "German", "Bark", "../img/dog-t-2.png").animalInfo();
animalsWrapper.innerHTML += new Animal("Cat", "Persian", "Mio", "../img/cat-1.png").animalInfo();
animalsWrapper.innerHTML += new Animal("Dog", "Pomeranien", "Bark", "../img/dog-1.png").animalInfo();

animalsWrapper.innerHTML += new Fish("Fish", "Goldfish", "", "../img/fish-1.jpeg", "Souer").fishInfo();
animalsWrapper.innerHTML += new Fish("Fish", "Guppy", "", "../img/fish-2.jpeg", "Sweet").fishInfo();
animalsWrapper.innerHTML += new Fish("Fish", "Neon", "", "../img/fish-3.jpeg", "Ocean").fishInfo();