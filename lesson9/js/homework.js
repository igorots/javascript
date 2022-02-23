//Все робити за допомоги js.
//- створити блок,
//- додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
/*let div = document.createElement('div')
div.classList.add('wrap');
div.classList.add('collase');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background = '#B5B8B1';
div.style.color = '#FBCEB1'
div.style.fontSize = '25px'
document.body.append(div);
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));*/
//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий
// для кожного елементу масиву створює li та додає йогоma
//до блоку .menu
// Завдання робити через цикли.
/*let arry = [
    {Main: 'Main', Products: 'Products', About: 'About us', Contacts: 'Contacts'}];
for (const course of arry) {
    let divElement = document.createElement('div');
    divElement.innerText = `${course.Main} ${course.Products} ${course.About}  ${course.Contacts}`;
    document.body.appendChild(divElement)
}*/
//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title
// та monthDuration
// Завдання робити через цикли.
for (const i of coursesAndDurationArray) {
    let element = document.createElement('div');
    element.innerText = `${i.title} ${i.monthDuration}`;
    document.body.appendChild(element)
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
// Завдання робити через цикли.
for (const i of coursesAndDurationArray) {
    let  divElement = document.createElement(`div`);
  /*  div.classList.add('item');*/
    let h1 = document.createElement('h1');
    h1.innerText = i.title;
    h1.classList.add('heading')
    let p = document.createElement(`h1`);
    p.innerText = i.monthDuration;
    p.classList.add('description')
    divElement.appendChild(h1);
    divElement.appendChild(p);
    document.body.appendChild(divElement);

}