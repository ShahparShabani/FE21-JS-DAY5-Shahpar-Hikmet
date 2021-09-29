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
    job;
    img;

    constructor(fName, lName, gender, job, img) {
        this.fName = fName;
        this.lName = lName;
        this.gender = gender;
        this.job = job;
        this.img = img;
    }

    personInfo() {
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

function addPerson(fName, lName, gender, job, img){
    pesrsonsWrapper.innerHTML += new Person(fName, lName, gender, job, img).personInfo();
}

addPerson("Shahpar", "Shabani", "Female", "Developer", "../img/pt-f.png");
addPerson("John", "Doe", "Male", "Teacher", "../img/pt-m.png");
addPerson("Jane", "Doe", "Female", "Doctor", "../img/pt-f.png");

