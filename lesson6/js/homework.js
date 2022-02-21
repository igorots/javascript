//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
/*let hlw = 'hello world'
console.log(hlw.length);
let loip = 'lorem ipsum'
console.log(loip.length)
let jsisC = 'javascript is cool'
console.log(jsisC.length)*/
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
/*let toUpperCase = hlw.toUpperCase();
console.log(toUpperCase);
let toUpperCase2 = loip.toUpperCase();
console.log(toUpperCase2);
let tuUperCase3 = jsisC.toUpperCase();
console.log(tuUperCase3)*/
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*let hW = 'HELLO WORLD'
let lI = 'LOREM IPSUM'
let jsC = 'JAVASCRIPT IS COOL'
let tolwer = hW.toLowerCase();
console.log(tolwer);
jsC = jsC.toLowerCase();
console.log(jsC);
lI = lI.toLowerCase();
console.log(lI);*/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   '
str = str.trim(); console.log(str)*/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
/*let str = 'Каждый охотник желает знать'
let infosplit = str.split(' ');
console.log(infosplit)
console.log(infosplit[0])*/
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
/*let delete_characters = (str, index) => {
    return str.substr(0, index);
};
document.writeln(delete_characters(str, 6))*/
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка
// необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
//  document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
/*let ins = (str) => {
    let split = str.split(' ').join( "-").toUpperCase();return split;
}
let h1 = "HTML JavaScript PHP";
console.log(ins(h1));
document.write(ins(h1));*/
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.

let upper1leter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
document.write(upper1leter('функція, яка приймає рядок як аргумент і перетворює регістр першого\n' +
    ' символу рядка з нижнього регістру у верхній.'))
console.log(upper1leter('функція, яка приймає рядок як аргумент і перетворює регістр першого\n' +
    ' символу рядка з нижнього регістру у верхній.'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово
// починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

document.write(capitalize('функція capitalize(str), яка повертає рядок, у якому кожне словопочинається з великої літери.'))
