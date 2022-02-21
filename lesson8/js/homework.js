let contentById = document.getElementById('content');
console.log(contentById);
let rulesById = document.getElementById('rules');
console.log(rulesById);
contentById.innerText = 'замініть текст параграфа з id \'content\' на будь-який інший'
rulesById.innerText = '-- замініть текст параграфа з id \'rules\' на будь-який інший'
// -- змініть кожному елементу колір фону на червоний
let bacground = document.body.children;
for (const i of bacground) {
    i.style.backgroundColor = 'red'
};
// -- змініть кожному елементу колір тексту на синій --
let colorText = document.body.children;
for (const  i of colorText) {
    i.style.color = 'blue'
};
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId =document.getElementById('rules');
console.log(rulesId.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let colorTextClasFcRules = document.getElementsByClassName('fc_rules')
for (const i of colorTextClasFcRules) {
    i.style.color = 'red'
};