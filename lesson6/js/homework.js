//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let hlw = 'hello world'
console.log(hlw.length);
let loip = 'lorem ipsum'
console.log(loip.length)
let jsisC = 'javascript is cool'
console.log(jsisC.length)
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = hlw.toUpperCase();
console.log(toUpperCase);
let toUpperCase2 = loip.toUpperCase();
console.log(toUpperCase2);
let tuUperCase3 = jsisC.toUpperCase();
console.log(tuUperCase3)
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hW = 'HELLO WORLD'
let lI = 'LOREM IPSUM'
let jsC = 'JAVASCRIPT IS COOL'
let tolwer =hW.toLowerCase();
console.log(tolwer);
jsC=jsC.toLowerCase();
console.log(jsC);
lI = lI.toLowerCase();console.log(lI);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
str = str.trim(); console.log(str)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.