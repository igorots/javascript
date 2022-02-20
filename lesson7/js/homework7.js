//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phon) {
    this.id = id;
    this.phon = phon;
    this.email = email;
    this.surname = surname;
    this.name = name;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userPlas = [
    new User(1, 'greg', 'grego', 'dfr@gh.com', 344355363),
    new User(2, 'tolik', 'nikoinko', 'tl@gmil.com', 82868292209),
    new User(44, 'lena', 'petenko', 'len@maas.cu', 3664474488),
    new User(15, 'greg', 'grego', 'dr@gh.com', 344355363),
    new User(26, 'tolik', 'nikolinko', 'tl@gmil.com', 82868292209),
    new User(4, 'lena', 'petrenko', 'len@maas.cu', 3664474488),
    new User(11, 'greg', 'grego', 'dfr@gh.com', 34435363),
    new User(99, 'tik', 'nilinko', 'l@gmil.com', 8268292209),
    new User(9, 'lena', 'peto', 'ln@maas.cu', 366474488),
]
document.write(userPlas)
console.log(userPlas)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = userPlas.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
});
console.log(filter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.
//  по зростанню (sort)
userPlas.sort((a, b) => a.id - b.id)
console.log(userPlas)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
console.log(Client)
// створити пустий масив, наповнити його 10 об'єктами Client
let arrayClient = [
    new Client(1, 'igor', 'popov', 'weeej@hhhh', 4994949494, [99090, 678878]),
    new Client(2, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [66699, 67877, 788989]),
    new Client(3, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [66699, 67877, 788989]),
    new Client(4, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [666699, 67877, 788989]),
    new Client(5, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [666699, 67877, 788989]),
    new Client(6, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [666699, 67877, 788989]),
    new Client(7, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [66699, 67877, 788989]),
    new Client(78, 'andre', 'rffdh', 'fgdfdhh@kskks', 5766678899, [66699, 67877, 788989, 88888]),
]
console.log(arrayClient)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrderClient = arrayClient.sort((a,b)=>a.order.length -b.order.length);
console.log(sortOrderClient)