//
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//- -- changeYear (newValue) - змінює рік випуску на значення newValue
//- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*function carConst(model, year, producer, speed, engineCapacity) {
    this.model = model;
    this.year = year;
    this.producer = producer;
    this.speed = speed;
    this.engineCapasity = engineCapacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key}-${this[key]}`)

        }
    }
    this.newincreaseMaxSpeed = function (newSpeed) {
        this.speed = this.speed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addcar = new Cars('Polo', 2015, 'Volkswagen', 200, 1.4)
console.log(addCar);
addCar.drive();
addCar.info();
addCar.newMaxSpeed(20);
addCar.drive();
addCar.changeYear(2015)
addCar.info();
addCar.addDriver('Vasil')
console.log(addCar)*/
// (Те саме, тільки через клас)
//творити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//- changeYear (newValue) - змінює рік випуску на значення newValue
//- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*
class cars2 {
    constructor(model, year, producer, speed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }

    newspeed(newSpeed) {
        this.speed = this.speed + newSpeed
    }

    chngeYear(newValye) {
        this.year = newValye;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let addCar2 = new cars2('Polo', 2005, "Volkswagen", 200, 1.3)
*/

//створити класс/функцію констр уктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
/*class popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const popelushkaArray = [
    new popelushka('lena', 22, 37),
    new popelushka('lena', 22, 36),
    new popelushka('lena', 22, 35),
    new popelushka('lena', 22, 34),
    new popelushka('lena', 22, 35),
    new popelushka('lena', 22, 39),
    new popelushka('Olena', 22, 25),
    new popelushka('Malena', 22, 30),
    new popelushka('Sena', 22, 26),
    new popelushka('Inna', 22, 31)
];

  
}
//торити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prints {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot
    }
}
const printsarray = [
    new prints('Pavel',33, 26)
]
const para = (popelushkaArray, prints) => {
    for (const item of popelushkaArray) {
        if(item.footSize === prins.foot) {
            return `you printses : ${item.name}`
        }
    }
}
console.log(para(popelushkaArray, prints))*/
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.

//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку