//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function ploscha(a, b) {
//     let mnoj = a * b;
//     return mnoj;
// }
//
// let x1 = ploscha(4, 5);
// console.log(x1);
//
//- створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function kolo(r) {
//     const Pi = 3.14;
//     let P = Pi * (r**2);
//     return P;
// }
//
// let x2 = kolo (4);
// console.log(x2);
//
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinder (r, h) {
//     const Pi = 3.14;
//     let P = 2 * Pi * r * h + 2 * Pi * (r**2);
//     return P;
// }
//
// let x3 = cylinder(3, 5);
// console.log(x3);
//
//- створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [33, 41, 57, true, 'Okten'];
//
// function priyom(a) {
//     for (i = 0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }
// priyom(array)
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function stvor(t) {
//     document.write(`<p>${t}</p>`)
// }
//
// stvor ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, asperiores explicabo fuga hic laboriosam magni nihil nobis omnis perspiciatis quis.');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function kol(txt) {
//     document.write(`<ul>`);
//          document.write(`<li> ${txt}</li>`);
//          document.write(`<li> ${txt}</li>`);
//          document.write(`<li> ${txt}</li>`);
//     document.write(`</ul>`);
// }
//
// kol('troy');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function kol2 (k, txt) {
//         document.write(`<ul>`);
//     for (i=1; i<=k; i++){
//          document.write(`<li> ${txt}</li>`);}
//     document.write(`</ul>`);
//     }
//
//
// kol2(3, 'Hello Okten')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function mass2(element) {
//     document.write(`<ul>`)
//     for (i=0; i<element.length; i++){
//         document.write(`<li> ${element[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// mass2 ([true, false,'Hello', 'Okten', 123, 456]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let massiv = [
//     {id: 7, name: 'Ivan', age: 33},
//     {id: 11, name: 'Petro', age: 22},
//     {id: 25, name: 'Oleg', age: 44}];
// function okten(array) {
//     for (const newArray of array) {
//         document.write(`<div>${newArray.id}.${newArray.name} - ${newArray.age}</div>`);
//     }
// }
// okten(massiv);
