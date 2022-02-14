//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let numbers = [0,9,8,7,6,5,4,3,2,1]
let result = 0
for (let i = 0; i < numbers.length; i++) {
    result += arr[i]
}
document.write(result)
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    title: "Tom Sawyer",
    pages:  562,
    genre: "Adventures"
}
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    title: "Tom Sawyer",
    pages:  562,
    genre: "Adventures",
    author: "Mark Twain"
}
//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book3 = {
    title: "To Build a Fire",
    pages:  62,
    genre: "Adventures",
    author: "Jack London"
}
let library = [book3, book2]
console.log(book3.title, book2.title)
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = height*width
console.log(s)
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = (res)
v = 3.14 * (dC **2) * height
console.log(res)
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let c = (m **2) + (n **2)
console.log(Math.sqrt(c));