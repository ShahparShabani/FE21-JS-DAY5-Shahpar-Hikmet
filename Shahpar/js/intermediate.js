class Car {
    type;
    brand;
    model;
    color;

    constructor(type, brand, model, color) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    carInfo() {
        return;
    }

}

class Animal {
    type;
    name;
    sound;

    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    animalInfo() {
        return;
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
        return `<div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fName}  ${this.lName}</h5>
          <p class="card-text"> Gnder: ${this.gender}</p>
        </div>
      </div>`;
    }
}

class Profession extends Person {
    job;

    constructor(fName, lName, gender, img, job) {
        super(fName, lName, gender, img);
        this.job = job;
    }

    professionInfo() {
        return `<div class="card pCard" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fName}  ${this.lName}</h5>
          <p class="card-text"> Gnder: ${this.gender}<br/>
           Job: ${this.job}</p>
        </div>
      </div>`;
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

addPerson("Shahpar", "Shabani", "Female", "../img/pt-f.png");
addPerson("John", "Doe", "Male", "../img/pt-m.png");
addPerson("Jane", "Doe", "Female", "../img/pt-f.png");


addPersonWithJob("Shahpar", "Shabani", "Female", "../img/pt-f.png", "Developer");
addPersonWithJob("John", "Doe", "Male",  "../img/pt-m.png", "Teacher");
addPersonWithJob("Jane", "Doe", "Female", "../img/pt-f.png", "Doctor");