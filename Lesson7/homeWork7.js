// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// const arrUser = [
//     new User(23, 'vasya', 'reycih', 'daaadf@gmail.com', '+380998887774'),
//     new User(32, 'dzid', 'polot', 'for23@gmail.com', '+380998887272'),
//     new User(4, 'serg', 'kormon', 'rototo@gmail.com', '+380998887171'),
//     new User(1, 'oleks', 'reznik', 'weron@gmail.com', '+380998557775'),
//     new User(70, 'orest', 'olovyaniy', 'morg@gmail.com', '+380998717334'),
//     new User(25, 'stepan', 'black', 'slon@gmail.com', '+380998887111'),
//     new User(81, 'gorg', 'ribuy', 'lev@gmail.com', '+380998887235'),
//     new User(47, 'pavlo', 'chernish', 'shark@gmail.com', '+380998887891'),
//     new User(76, 'ihor', 'prosto', 'bus@gmail.com', '+380998887500'),
//     new User(8, 'oleh', 'beletskiy', 'golf@gmail.com', '+380998887333')
// ];
// console.log(arrUser);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// console.log(arrUser.filter(value => value.id%2 === 0));
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// const sort = arrUser.sort((a,b) => a.id - b.id);
// console.log(sort);
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
// створити пустий масив, наповнити його 10 об'єктами Client
const arrUser = [
    new Client(23, 'vasya', 'reycih', 'daaadf@gmail.com', '+380998887774','milk','shake'),
    new Client(32, 'dzid', 'polot', 'for23@gmail.com', '+380998887272','orange'),
    new Client(4, 'serg', 'kormon', 'rototo@gmail.com', '+380998887171','lime','meat','bri'),
    new Client(1, 'oleks', 'reznik', 'weron@gmail.com', '+380998557775','cheese','milr','bread','salt','sugar'),
    new Client(70, 'orest', 'olovyaniy', 'morg@gmail.com', '+380998717334','bread'),
    new Client(25, 'stepan', 'black', 'slon@gmail.com', '+380998887111','apple','orange'),
    new Client(81, 'gorg', 'ribuy', 'lev@gmail.com', '+380998887235','milk', 'bread', 'juice'),
    new Client(47, 'pavlo', 'chernish', 'shark@gmail.com', '+380998887891','onion'),
    new Client(76, 'ihor', 'prosto', 'bus@gmail.com', '+380998887500','potato','milk'),
    new Client(8, 'oleh', 'beletskiy', 'golf@gmail.com', '+380998887333','pomelo')
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrUser.sort((a,b) => a.order.length - b.order.length));