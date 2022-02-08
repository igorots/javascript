//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*function rectangle(a, b) {
    return a * b
}
let result = rectangle(a, b)
console.log(rectangle(13, 12))*/
// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*function circle(r) {
    let C = 3.14 * rad
    let rad = r ** 2
    return C
}
console.log(circle(r))*/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*function cylinder (r, h) {
let fCylinder = 2 * 3.14 * r * h
    return fCylinder
}
console.log(cylinder(30, 50))*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/*let mas = [1, 5, 6]
function iterator (mas){
    for (let item of mas){
        console.log(item)
    }
}*/
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function paragraphText(text){
    document.write(`<p>${text}</p>`)
}
paragraphText('Текст задати через аргумент')*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function listCrestor(a, b, c){
    document.write(`<ul>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${b}</li>`)
    document.write(`<li>${c}</li>`)
    document.write(`</ul>`)
}
listCrestor(`item 1`, `item 2`, `item 3`)*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
/*function listCrestor2(a, b, c){
    document.write(`<ul>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${b}</li>`)
    document.write(`<li>${c}</li>`)
    document.write(`</ul>`)
}
listCrestor2(`item`, `item`, `item`)*/
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function lestCreator(text, nuber) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
lestCreator(`loren text`, 5)*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let variousFunctions =[1, `Roman`, true]
function primitives (array) {
    document.write(`<ul>`)
    for (let i = 0; i < array.length;i++) {
        document.write(`<li>${array[i]</li>`)
    }
       document.write(`</ul>`)
}
primitives(variousFunctions)*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let Array = [
    {
        namber: 0,
        nikname: `Serge`,
        age: 44
    },
    {
        namber: 1,
        nikname: `Anna`,
        age: 24
    },
    {
        namber: 2,
        nikname: `Ivan`,
        age: 27
    }
]
function objArray(array) {
    for (const arrayElement of array){
        document.write(`<div>${arrayElement.namber}.${arrayElement.nikname} - ${arrayElement.age}</div>`);
    }
}
