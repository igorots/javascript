//--створити масив з:
// - з 5 числових значень
/*let masNumbers =[0, 2, 3, 4, 5]*/
// - з 5 стічкових значень
/*let mastxt = ["Жизнь", "— это", "не те дни", ", что прошли,", "а те, что запомнились"]*/
// - з 5 значень стрічкового, числового та булевого типу
/*let mas = [
    {
        name: 'Pavlo',
        lastN: 'Sterin',
        age: 34,
        stat: true,
        experience: 11
       },
    {   name: 'Jen',
        lastN: 'Petson',
        age: 21,
        stat: false,
        experience: 1
    },
    {
        name: 'Jon',
        lastN: 'Konnor',
        age: 53,
        stat: true,
        experience: 20
    },
    {
        name: 'Nick',
        lastN: 'Iuron',
        age: 35,
        stat: true,
        experience: 15
    },
    {
        name: 'Igor',
        lastN: 'Petrov',
        age: 33,
        stat: false,
        experience: 10
    }

]
// - та вивести його в консоль
console.log(mas)*/
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
/*let b = []
b [0] = 1
b [1] = 2
b [3] = 4
console.log(b)
document.write(b)*/
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*document.write('<div>');
for (let x = 0; x < 10; x++) {
    document.write('<div> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</div>')
}
document.write('</div>')*/
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*document.write('<div>');
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} text </div>`)
}
document.write('</div>')*/
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*
document.write(`<div>`)
let i = 0;
     while (i = 0 i < 20) {
    document.write(`<h1>${i}text</h1>`)
    i++ів. Вивести в консоль всі його елементи в циклі.
}
 document.write(`</div>`)*/
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let ex = 0;
while (ex < 20) {
    document.write(`<h1> ${i} "text" </h1>`)
    ex++
}*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*let namArray = [1, 2, 3, 33, 44, 55, 66, 77, 78, 88]
for (i = 0; i < namArray.length; i++) {
    console.log(namArray[i])
}*/
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let textArr = ['q', 'w', 'e', 'f', 't', 'hg', 'tr', 'trr', 'rttty']
for (i = 0; i < textArr.length; i++) {
    console.log(textArr[i])
}*/
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let array = [2, 3, 33, 44, 't', 'hg', 'tr', 'trr', 55, 66, 77, 78,]
for (i = 0; i < array.length; i++) {
    console.log(array[i])
}*/
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let array2 = [2, 3, 33, 44, 't', 'hg', 'tr', 'trr', 55, 66, 77, 78, true, false]
for (i = 0; i < array2.length; i++) {
    if (typeof array2[i] === 'boolean') {
        console.log(array2[i])
    }
}*/
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*for (i = 0; i < array2.length; i++) {
    if (typeof array2[i] === "number") {
        console.log(array2[i])
    }
}*/
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*for (i = 0; i < array2.length; i++) {
    if (typeof array2[i] === "string") {
        console.log(array2[i])
    }
}*/
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*let array3 = []
array3[1] = 1
array3[2] = 'jhjlk'
array3[0] = true
array3[3] = 5
array3[4] = 'djjjj'
array3[5] = 9
array3[6] = false
array3[7] = 'fi'
array3[8] = 'nooo'
array3[9] = 99
for (i = 0; i < array3.length; i++) {
    console.log(array3[i])
}*/
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
/*for (i = 0; i < 10; i++) {
    console.log('крок циклу :' + i + " ")
    document.write('крок циклу :' + i + " ")
}*/
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (i = 0; i < 100; i++) {
    console.log('крок циклу :' + i + " ")
    document.write('крок циклу :' + i + " ")
}*/
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
/*for (i = 0; i < 100; i += 2) {
    console.log('крок циклу :' + i + " ")
    document.write('крок циклу :' + i + " ")
}*/
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
// через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('крок циклу :' + i + " ")
        document.write('крок циклу :' + i + " ")
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
for (i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('крок циклу :' + i + " ")
        document.write('крок циклу :' + i + " ")
    }
}*/
