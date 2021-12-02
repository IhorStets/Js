// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n4 = 'Albus__**?>>Dambldor'
//
// const validName = (enterName) =>{
// return enterName.replaceAll(/[^a-zа-яё]/gi, ' ').replace(/\s+/g, ' ').trim()
// }
// console.log(validName(n4))
//
//--в відео Сергій показав варінти тільки для конкретних символів, а в готових наче розібравсь, але здалось занадто складним.
//На Snipp знайшов метод видалення всіх спецсимволів і замінив їх на пробіли, а вже на Хабрі як забрати зайві пробіли всередині
//Мені цей варіант здавсь зрозумілішим. Хоч і не зовсім зрозумів що значать /gi та s+/g
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n2, '-');
//
//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// const random = (length) => {
//     let Array = [];
//     for (i = 0; i < length; i++) {
//         Array.push(Math.round(Math.random() * 100));
//     }
//     return Array
// }
//
// console.log(random(12));
//
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort
//
// const random = (length) => {
//     let Array = [];
//     for (i = 0; i < length; i++) {
//         Array.push(Math.round(Math.random() * 100));
//     }
//     return Array.sort((a,b) => a - b)
// }
//
// console.log(random(9));
//
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа
//
// const random = (length) => {
//     let Array = [];
//     for (i = 0; i < length; i++) {
//         Array.push(Math.round(Math.random() * 100));
//     }
//     return Array.filter(value => !(value%2))
// }
//
// console.log(random(12));
//
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// const random = (length) => {
//     let Array = [];
//     for (i = 0; i < length; i++) {
//         Array.push(Math.round(Math.random() * 100));
//     }
//     return Array.map(value => value + '')
// }
//
// console.log(random(12));
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//      або навпаки в залежності від значення аргументу direction.
//       let nums = [11,21,3];
//       sortNums('ascending') // [3,11,21]
//       sortNums('descending') // [21,11,3]

// let sortNums = (array, direction) => {
//           if (direction === 'asc'){
//               return array.sort((a, b) => a - b);}
//           else if (direction === 'desc') {
//               return array.sort((a, b) => b - a);}
//           return []
//       };
//       console.log(sortNums([40, 61, 35, 51, 33, 66, 22, 24, 54, 84, 59, 10], 'asc') );
//
//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //-- відсортувати його за спаданням за monthDuration
//
//     console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
//     // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
