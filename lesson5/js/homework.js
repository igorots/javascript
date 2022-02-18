// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
/*function areaRectangle(a, b) {
   return  a*b
}
console.log(areaRectangle(18,19))*/

/*
let areaRectangle = (a, b) => {
    return a * b;
}
console.log(areaRectangle(30, 40))
*/

// - створити функцію яка обчислює та повертає площу кола
/*let areaCircle = (r) => {
    return r ** 2 * 3.14
}
console.log(areaCircle(20))*/
// - створити функцію яка обчислює та повертає площу циліндру
/*let areaCylinder = (r2, h) => {
    return 3.14 * (r2 ** 2) * h
}
console.log(areaCylinder(20, 20))*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/*let arr = [33, 44, 55, `tr`]
let arrF = () => {
    for ( let i = 0; i < arr.length; i++) {
        document.write(arr[i])
    }
}
arrF(arr)*/
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
/*let partext = (text) => {
    for (let i = 0; i < 5; i++) {
        document.write(`<p>${i}-${text}</p>`)
    }
}
partext(`text text`)*/
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*let crtUL = (ul) => {
    document.write(`<ul>`)
    document.write(`<li>${ul}</li>`)
    document.write(`<li>${ul}</li>`)
    document.write(`<li>${ul}</li>`)
    document.write(`</ul>`)
}
crtUL(`якийсь текст`)*/
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*let crtUdinam = (t, n) => {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${t}</li>`);
    }
    document.write(`</ul>`)
}
crtUdinam(`якийсь текст`, 3)*/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let newArray = [1, 33, 44, 55, `text`, true]
let arr = (arayElement) => {
    document.write(`<ol>`)
    for (i = 0; i < arr.length; i++) {
        document.write(`<li>${arayElement[i]}</li>`)
    }
    document.write(`</ol>`)
}
arr(newArray)*/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array4 = [{id: 1, name: 'Stepan', age: 33}, {id: 2, name: 'Pavlo', age: 55}, {id: 3, name: 'Fedir', age: 44}]
let arrayob = (array) => {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id}${arrayElement.name}${arrayElement.age}</div>`)
    }
}
arrayob(array4);
