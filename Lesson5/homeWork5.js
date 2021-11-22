// - створити функцію яка обчислює та повертає площу прямокутника висотою h
//
// const S = (a, h)=>{return a*h};
// console.log(`${S(4,6)}`);
// document.write(`${S(4,6)}`);
//
// - створити функцію яка обчислює та повертає площу кола
//
// const koloS = (r)=>{return Math.PI*Math.pow(r,2)};
// console.log(`${koloS(3)}`);
// document.write(`${koloS(3)}`);
//
// - створити функцію яка обчислює та повертає площу циліндру
//
// const cilindrS = (r, h) => {return 2 * Math.PI * r  * h * ( r + h ) };
// console.log(`${cilindrS(2,3)}`)
// document.write(`${cilindrS(2,3)}`);
//
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let Array = [23, 1, -9, 11, 90, 81, 86, -7, 34];
// let newArray = (mass) => {
//         for (newArrays of mass){
//             console.log(newArrays)
//     }
// }
// newArray(Array);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// const Text = (p) => {document.write(p)}
// Text (' Okten School')
//
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  const Text2 = (p) => {
//     document.write(`<ul>`)
//         document.write(`<li>${p}</li>`)
//         document.write(`<li>${p}</li>`)
//         document.write(`<li>${p}</li>`)
//     document.write(`</ul>`)
//  }
//
//  Text2('Okten School Lviv')
//
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// const Text3 = (p,k) => {
//     document.write(`<ul>`)
//     for (i = 0; i<k; i++){
//         document.write(`<li>${p}</li>`)
//     }
//     document.write(`</ul>`)
// }
// Text3('Okten Lviv', 5)
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [34,56,-7, true, false, 'Okten', true, 'Lviv']
// const newArray = (element) => {
//     document.write(`<ul>`)
//     for (i = 0; i<element.length; i++){
//         document.write(`<li>${element[i]}</li>`)}
//     document.write(`</ul>`)
// }
//
// newArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let massiv = [
//     {id: 7, name: 'Ivan', age: 33},
//     {id: 11, name: 'Petro', age: 22},
//     {id: 25, name: 'Oleg', age: 44}];
//
// const obj = (mass) => {
//     for (const newObj of mass) {
//         document.write(`<div><h2>Користувач ${newObj.name} віком ${newObj.age} роки. Зареєстрований під номером ${newObj.id}</h2></div>`)
//     }
// }
//
// obj(massiv);