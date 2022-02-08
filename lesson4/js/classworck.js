/*




- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


*/

//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*
function namberSmalles(a, b, c) {
    if (a < b && a < c) {
        document.write(a)
    } else if (b < c && b < c) {
        document.write(b)
    } else if (c < b && c < a) {
        document.write(c)
    }
}

namberSmalles(100, 50, 30)
*/

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

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

//- створити функцію яка повертає найбільше число з масиву

/*let nawAr = [1, 5, 51, 8, 9, 99, 89]
function numberBig(array){
    let max = array[0]
    for (const element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}
console.log(numberBig(nawAr))*/

//- створити функцію яка повертає найменьше число з масиву
/*let mas = [1, 6, 8, 99, 88, 66]
function numLess(array){
    let min = array[0]
    for (const element of array) {
        if (element < min) {
            min = element
        }
    }
    return min
}
console.log(numLess(mas))*/
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*
let nawArray = [1, 2, 33, 3]
function  numSum(sum) {
    let result = 0
    for (let i = 0; i < sum.length; i++){
        result += sum[i]
    }
    return result
}

console.log(numSum(nawArray));*/
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let nawArray = [1, 2, 33, 3]
function  numSum(sum) {
    let result = 0
    for (let i = 0; i < sum.length; i++){
        result += sum[i]
    }

}