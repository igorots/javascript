//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let nambrSm = (a, b, c) => {
    if (a < b && a < c) {
        document.write(a)
    } else if (b < c && b < c) {
        document.write(b)
    } else if (c < b && c < a) {
        document.write(c)
    }
}
nambrSm(46, 56, 77)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function bnamber(array) {
    let max = array[0]
    for (const element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}

console.log(bnamber([2, 6555, 7, 77, 9]));*/
let bigNamber = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        document.write(n1)
    } else if (n2 > n3 && n2 > n3) {
        document.write(n2)
    } else if (n3 > n2 && n3 > n1) {
        document.write(n3)
    }
}
   bigNamber(39, 46, 55)

//- створити функцію яка повертає найбільше число з масиву

let nawAr = [1, 5, 51, 8, 9, 99, 89]

 let foo =(array) => {
     let max = array[0]
     for (const element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}
console.log(foo(nawAr))
// - створити функцію яка повертає найменьше число з масиву

 let minN = (array) => {
    let min = array[0]
     for (element of array) {
         if (element < min) {
             min =element
         }
     }
     return min
 }
 console.log(minN(nawAr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let sum = 0;
function arraySum(array){let sum = 0; i,<array.length; i++}
    for (let i = 0; i < array.length; i++) {
    sum += array[i];} arraySum*/
let sumAr = [5, 7, 66];
let sumNamber = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement
    }
    return sum
}
console.log(sumNamber(sumAr))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
       let  average = (arr) =>
       {
           if (arr.length === 0)
               return 0;

           let sum = 0;

           for(let i = 0; i < arr.length; i++) {
               sum += arr[i];
           }
           return sum / arr.length;
       }
            console.log(average(sumAr))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minandmax = (...nam) => {
    let max = nam [0];
    let min = nam [0];
    for (let element of nam) {
          if (element < min) {
              min = element
          }
          if (element > max) {
              max = element
          }
    }
    console.log("max ", max)
    return min
}
console.log(minandmax(10, 6, 56, 77, 5));


// - створти функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].