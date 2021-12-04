// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Cars(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function (){
//     console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year},
//     максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
//     };
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed +=newSpeed;
//     };
//
//     this.changeYear = function (newValue){
//         this.year = newValue
//     };
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class CarClass {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info (){
//     console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year},
//     максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
//     };
//
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed +=newSpeed;
//     };
//
//     changeYear (newValue){
//         this.year = newValue
//     };
//
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella{
//         constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellas =[
//     new Cinderella('sveta','13','35'),
//     new Cinderella('olya','23','36'),
//     new Cinderella('hanna','27','39'),
//     new Cinderella('arina','1','12'),
//     new Cinderella('luda','60','39'),
//     new Cinderella('klava','50','40'),
//     new Cinderella('alla','35','38'),
//     new Cinderella('ira','33','35'),
//     new Cinderella('kira','16','34'),
//     new Cinderella('marina','43','39'),
// ]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let prince = new Prince('petro', 66, '39')
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let newPara = (cinderellaArr, prince) => {
//     let who = []
//     for (const item of cinderellaArr) {
//         if (item.size === prince.shoe) {
//             who.push(item.name)
//         }
//     }
//     console.log(`Одна з них твоя попелюшка : ${who.join(' or ')}`)
// };
// newPara(cinderellas, prince)
//
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let cinderella = cinderellas.find(value => value.size === prince.shoe)
// console.log(cinderella)