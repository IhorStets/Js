// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function math(a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     } else if (b < a && b < c){
//         console.log(b);
//     } else if (c < a && c < b){
//         console.log(c);
//     } else {
//         console.log('????');
//     }
// }
//
// math(4, 7, 3);
// math(56, 13, 23);
// math(7,7,7);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function math(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
//     math(34, 55, 77);
// - створити функцію яка повертає найбільше число з масиву
//
// let array = [11,45,23,56,-99,12,36];
//
// function maxFromMass (arr){
//     let max = arr[0];
//     for (const numbers of arr) {
//         if (numbers > max){
//             max = numbers
//         }
//     }
//     return max;
// }
//
// document.write(`${maxFromMass(array)}`)
// - створити функцію яка повертає найменьше число з масиву
//
// let array = [11,45,23,56,-99,12,36];
//
// function minFromMass (arr){
//     let min = arr[0];
//     for (const numbers of arr) {
//         if (numbers < min){
//             min = numbers
//         }
//     }
//     return min;
// }
//
// document.write(`${minFromMass(array)}`)
//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1, 34, 95, 45, 34, 6, 9, 77, 81, 90];
// function summ(arg){
//
//     let x = 0;
//
//     for (i=0; i < arg.length; i++){
//         x = x + arg[i];
//     }
//     return x;
// }
//
// document.write(`${summ(arr)}`);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 34, 95, 45, 34, 6, 9, 77, 81, 90];
// function serdn(arg){
//
//     let x = 0;
//
//     for (const numbers of arg){
//         x = x + numbers;
//     }
//
//
//     return x/arg.length
//
// }
//
// document.write(`${serdn(arr)}`);
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let newArray = [345, 91, 63, 94, 19, 11, 68, 7, 30, 1, 42]
//
// function minAmax(okten) {
//     let min = okten[0];
//     let max = okten[0];
//
//     for (const arra of okten) {
//         if (arra < min){
//             min = arra
//         }
//
//         if (arra > max){
//             max = arra
//         }
//     }
//     console.log(max)
//     return min
// }
//
// document.write(`${minAmax(newArray)}`)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(okten, size){
//     for (i = 0; i < size; i++){
//         okten[i] = Math.round(Math.random()*100);
//     }
//     return okten
// }
//
// document.write(`${random ([], 10)}`)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(okten, size, limit){
//     for (i = 0; i < size; i++){
//         okten[i] = Math.round(Math.random()*limit);
//     }
//     return okten
// }
//
// document.write(`${random ([], 10,999)}`)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function massiv(array) {
//     let newArray = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[ri] = array[i];
//     }
//     console.log(newArray);
//
// }
//  massiv([1, 2, 3])