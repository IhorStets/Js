// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
const btn1 = document.getElementById('btn1');
let flag = true;
btn1.onclick = function () {
    if (flag === true) {
        document.getElementById('text').style.display = 'none';
    } else {
        document.getElementById('text').style.display = 'block';
    }
    flag = !flag;
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//

const btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    this.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let form = document.forms.chekoutAge;
form.onsubmit = function (e){
    e.preventDefault()
   if(+this.userAge.value < 18){
       alert('вам менше 18')
   };
}
// - Создайте меню, которое раскрывается/сворачивается при клике
//
const menu = document.getElementsByClassName('menu')[0];
menu.onclick = function (){
    this.classList.toggle('collapse');
}


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti'}
]

for (const comment of comments) {
    let commentDiv = document.createElement('div');

    let title = document.createElement('h2');
    title.innerText = comment.title;

    let bodyComment = document.createElement('div');
    bodyComment.innerText = comment.body;

    let btn = document.createElement('button');
    btn.innerText = 'Hide Comment Body';
    btn.onclick = function (){
        bodyComment.classList.toggle('hideComment');
    }

    commentDiv.append(title, bodyComment, btn);
    document.body.appendChild(commentDiv);
}