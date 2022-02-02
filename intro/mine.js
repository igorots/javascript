//1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let messag = 'hello'
let wat = 'owu'
let domain = 'com'
let country = 'ua'
let $ = 1
let _ = 10
let sally = -999
let gy = 123
let pi = 3.14
let hot = 16
var question = true
var answer = false
//2 Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(messag)
console.log(wat)
console.log(domain)
console.log(country)
console.log($)
console.log(_)
console.log(sally)
console.log(gy)
console.log(pi)
console.log(hot)
console.log(question)
console.log(answer)
alert(messag)
alert(wat)
alert(domain)
alert(country)
alert($)
alert(_)
alert(sally)
alert(gy)
alert(pi)
alert(hot)
alert(question)
alert(answer)
document.write(messag)
document.write(wat)
document.write(domain)
document.write(country)
document.write($)
document.write(_)
document.write(sally)
document.write(gy)
document.write(pi)
document.write(hot)
document.write(question)
document.write(answer)
//Переприсвоїти кожній змінній з завдання значення на довільне.
messag = 1
wat = 2
domain = 3
country = 4
$ = 5
_ = 6
sally = 7
gy = 8
pi = 9
hot = 10
question = 11
answer = 12
//Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
alert(1)
alert(2)
alert(3)
alert(4)
alert(5)
alert(6)
alert(7)
alert(8)
alert(9)
alert(10)
alert(11)
alert(12)
document.write(1)
document.write(2)
document.write(3)
document.write(4)
document.write(5)
document.write(6)
document.write(7)
document.write(8)
document.write(9)
document.write(10)
document.write(11)
document.write(12)
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = ("Igor")
let middleName = ("Volodemaroveth")
let lastName = ("Otsaluk")
document.write(firstName, middleName, lastName)
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName = prompt('Ваше імя?');
let middleName = prompt('По батькові?');
let lastName = prompt('Ваше прізвище?')
let age = prompt('Скільки тобі років?');
alert("Вітаю" + firstName + middleName + lastName `Тобі ${age} років!`);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
  //  В однакових виразах не використовувати однакові оператори!!!
5 < 6 > true
5 = 6 > false
5 == 6 > false
5 === 6 > false
10 = 10 > true
10 == 10 > true
10 === 10 > false
10 < 10 > false
10 > 10 > false
123 === '123' > false
123 == '123' > true
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); //25
document.write(str - a + "<br/>"); //15
document.write(str * "2" + "<br/>");//202
document.write(str / 2 + "<br/>");//10

