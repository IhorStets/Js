// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [45, 56, 33, 21, 7];
// let string = ['Андрій', 'Оля', 'Іван', 'Артем', 'Ганна'];
// let mass = [true, '72', false, 'George', "66"];
//
// console.log(numbers);
// console.log(string);
// console.log(mass);

//- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let pust = [];
//
// pust [0] = 'Apple';
// pust [1] = 40;
// pust [2] = 34;
// pust [3] = true;
// pust [4] = false;
//
// console.log(pust);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i<10; i++ ) {
//     document.write('<div>Okten</div>');
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let y = 0; y<10; y++) {
//     document.write(`<div>Day ${y+1}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let x = 0;
//
// while (x<20) {
//     document.write(`<div>Winter </div>`);
//     x++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let index = 0;
//
// while (index<20) {
//     document.write(`<div>${index+1} день місяця</div>`);
//     index++;
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [34, 5, 7, 11, 14, 56, 32, 45, 99, 122]
//
// for (let y = 0; y < numbers.length; y++) {
//     console.log (numbers[y]);
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ['Оля','Коля','Толя','Марина','Карина','Аріна','Ірина','Анна','Ганна','Ваня']
//
// for (let x = 0; x < string.length; x++) {
//     console.log( string[x]);
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massiv = ['Оля',true,21,'Марина',false,'Аріна',47,'Анна','Apple','Ваня'];
//
// for (let x = 0; x < massiv.length; x++) {
//     console.log(massiv[x]);
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Bool = ['Оля',true,21,'Марина',false,'Аріна',47,'Анна','Apple','Ваня'];
// for (i = 0; i < Bool.length; i++) {
//     if (typeof Bool[i] === 'boolean') {
//         console.log(Bool[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let numb = ['Оля',true,21,'Марина',false,'Аріна',47,'Анна','Apple','Ваня'];
// for (i = 0; i < numb.length; i++) {
//     if (typeof numb[i] === 'number') {
//         console.log(numb[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let stringg = ['Оля',true,21,'Марина',false,'Аріна',47,'Анна','Apple','Ваня'];
// for (i = 0; i < stringg.length; i++) {
//     if (typeof stringg[i] === 'string') {
//         console.log(stringg[i]);
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let pust = [];
//
// pust [0] = 'Apple';
// pust [1] = 40;
// pust [2] = 34;
// pust [3] = true;
// pust [4] = false;
// pust [5] = 'Оля';
// pust [6] = 23;
// pust [7] = 'Аріна';
// pust [8] = 77;
// pust [9] = 'Onion';
//
// for (i = 0; i<10; i++) {
//     console.log( pust[i])
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let x = 0; x < 10; x++) {
//     console.log(`поточний крок циклу : ${x + 1}  `);
//         document.write('<div>')
//         document.write(`поточний крок циклу : ${x + 1} `)
//         document.write('</div>')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
//document.write

// for (let x = 0; x < 100; x++) {
//     console.log(`поточний крок циклу : ${x + 1}  `);
//         document.write('<div>')
//         document.write(`поточний крок циклу : ${x + 1} `)
//         document.write('</div>')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let x = 0; x < 100; x= x + 2) {
//     console.log(`поточний крок циклу : ${x + 1}  `);
//         document.write('<div>')
//         document.write(`поточний крок циклу : ${x + 1} `)
//         document.write('</div>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let x = 0; x < 100; x++) {
//     if (x%2 === 0){
//      console.log(`поточний крок циклу : ${x}  `);
//          document.write('<div>')
//          document.write(`поточний крок циклу : ${x} `)
//          document.write('</div>')
//     }
//  }
//
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let x = 0; x < 100; x++) {
//     if (x%2 === 1){
//         console.log(`поточний крок циклу : ${x}  `);
//         document.write('<div>')
//         document.write(`поточний крок циклу : ${x} `)
//         document.write('</div>')
//     }
// }
