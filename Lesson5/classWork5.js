// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// const min = (a, b, c) => {
//     if (a < b && a < c){
//         console.log(a);
//         document.write(`${a}`)
//     }else if (b < a && b < c){
//         console.log(b);
//         document.write(`${b}`)
//     } else {
//         console.log(c);
//         document.write(`${c}`)
//     }
// }
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const max = (a, b, c) => {
//     if (a > b && a > c){
//         console.log(a);
//         document.write(`${a}`)
//     }else if (b > a && b > c){
//         console.log(b);
//         document.write(`${b}`)
//     } else {
//         console.log(c);
//         document.write(`${c}`)
//     }
// }
// - створити функцію яка повертає найбільше число з масиву
//
// let massiv = [32, 50, 10, -7, 33, 1, 82, 74, 52, -3, 0, 2];
// const maxChislo = (arr) => {
//     let maximum = arr[0];
//     for (const newArr of arr){
//         if (newArr > maximum){
//             maximum = newArr
//         }
//     }
//     return maximum;
// }
// console.log(`${maxChislo(massiv)}`)
//
// - створити функцію яка повертає найменьше число з масиву
// let massiv = [32, 50, 10, -7, 33, 1, 82, 74, 52, -3, 0, 2];
//
// const minChislo = (array) => {
//     let minimum = array[0];
//     for (const newArray of array){
//         if (newArray < minimum){
//             minimum = newArray
//         }
//     }
//     return minimum;
// }
//
// console.log(`${minChislo(massiv)}`)
//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let massiv = [32, 50, 10, -7, 33, 1, 82, 74, 52, -3, 0, 2];
//
// const obj = (a) => {
//     let summa = 0;
//     for (i = 0; i < a.length; i++){
//         summa  = summa + a[i];
//     }
// return summa
// }
// console.log(`${obj(massiv)}`)
//
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let massiv = [32, 50, 10, -7, 33, 1, 82, 74, 52, -3, 0, 2];
//
// const seredn = (mass) => {
//     let summa = 0;
//     for (i = 0; i < mass.length; i++) {
//         summa = summa + mass[i];
//     }
//     return summa/mass.length
// }
//
// console.log(`${seredn(massiv)}`)
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let massiv = [32, 50, 10, -7, 33, 1, 82, 74, 52, -3, 0, 2];
//
// const maxImin = (mass) => {
//     let max = mass[0];
//     let min = mass[0];
//     for (i = 0; i < mass.length; i++) {
//         if (mass[i] > max){
//             max = mass[i]
//         }
//         if (mass[i] < min){
//             min = mass[i]
//         }
//             }
//     console.log(max)
//     return min
// }
// document.write(`${maxImin(massiv)}`)
//----------------------------------------------------------------------------
//    глянув в телеграмі якраз пишуть що в цьому завданні можна не массив,
//    а Сергій якраз же показував такий варіант аргументу що числа сприймає як массив коли (...arg)
//
// const maxImin = (...mass) => {
//     let max = mass[0];
//     let min = mass[0];
//     for (i = 0; i < mass.length; i++) {
//         if (mass[i] > max){
//             max = mass[i]
//         }
//         if (mass[i] < min){
//             min = mass[i]
//         }
//             }
//     console.log(max)
//     return min
// }
// document.write(`${maxImin(3,4,7,-23,34,81,-7,56,10)}`)
//
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// const randomizer = (k) => {
//     let massa = [];
//     for (i = 0; i < k; i++){
//         massa[i] = Math.round(Math.random()*100)
//     }
//     console.log(massa)
// }
// randomizer(5)
//
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
//
// const randomizer = (k, limit) => {
//     let massa = [];
//     for (i = 0; i < k; i++){
//         massa[i] = Math.round(Math.random()*limit)
//     }
//     console.log(massa)
// }
// randomizer(7, 777)
//
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const reverse = (...arr) =>{
//     let newArr = [];
//     for (i = 0, ri = arr.length-1; i < arr.length, ri >= 0; i++, ri--){
//         newArr[i] = arr[ri]
//     }
//     console.log(newArr);
// }
// reverse(4,6,8,12);
// reverse(1,2,3);