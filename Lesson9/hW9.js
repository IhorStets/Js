// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Hello Okten';
div.style.color = 'gray';
div.style.background = 'silver';
div.style.fontSize = '26px';
document.body.appendChild(div);
const div2 = div.cloneNode(true);
document.body.appendChild(div2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.

const arr = ['Main','Products','About us','Contacts'];
const menuDiv = document.getElementsByClassName('menu')[0];

arr.forEach ( item => {
    const li = document.createElement('li');
    li.innerText = item;
    menuDiv.appendChild(li);
})
//
// - Є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
coursesAndDurationArray.forEach(value =>{
const div = document.createElement('div');
div.innerText = `Курс ${value.title} триває місяців: ${value.monthDuration}`
document.body.appendChild(div);
})
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
coursesAndDurationArray.forEach( value => {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.style.fontSize = '26px'
    const p = document.createElement('p');
    p.classList.add('description');
    p.style.fontSize = '20px'
    h1.innerText = value.title;
    p.innerText = `Триває місяців -- ${value.monthDuration}`;
    div.append(h1,p);
    document.body.appendChild(div)
})