
// - Користувач вводить або має два числа.dd
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let first = parseInt(prompt('перше число'), 10);
let second = parseInt(prompt('друге число'), 10);
let first = +prompt('перше число');
let second = +prompt('друге число');
if (first > second){
    console.log("перше більше")
} else if (first === second){
    console.log("числа рівні")
} else if (first < second){
    console.log("друге більше")
}

//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let question = +prompt('enter number')
if (question > 0 && question <= 20){
    console.log("1")
} else if (question >= 21 && question <= 48){
    console.log("2")
} else if (question >= 49 && question <= 90){
    console.log("3")
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt( "enter number")
if (number === 10) {
    console.log('true')
} else if (number !== 10) {
    console.log("not")
}
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let put = +prompt("write")
if (typeof put === 'string'){
    console.log("2")
} else if (typeof put === "number"){
    console.log("1")
} else if (typeof put === "object"){
    console.log("3")
} else {
    console.log("else")
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = 24;
if (temperature => 10 && temperature <= 22) {
    console.log(`йдемо сьогодні в OKTEN на навчання`)
} else {
    console.log(`сидимо вдома і вчимося ОНЛАЙН`)
}

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let priz = +prompt('enter number');
switch (priz) {
    case 1 : document.write(`Avto`);
    break;
    case 2 : document.write(`tw`);
        break;
    case 3 : document.write(`Tele`);
        break;
    case 4 : document.write(`100$`);
        break;
    case 5 : document.write(`1 000000 r`);
        break;
    default:
        console.log(`число не вірне`)

}

