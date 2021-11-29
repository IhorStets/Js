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
