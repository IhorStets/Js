//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (let postItem of value) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let postIdDiv = document.createElement('div');
            postIdDiv.innerText = `id - ${postItem.id}`;

            let postUserIdDiv = document.createElement('div');
            postUserIdDiv.innerText = `userID - ${postItem.userId}`;

            let postTitleDiv = document.createElement('h2');
            postTitleDiv.innerText = postItem.title;

            let postBodyDiv = document.createElement('div');
            postBodyDiv.innerText = postItem.body;

            postDiv.append(postIdDiv, postUserIdDiv, postTitleDiv, postBodyDiv)

            postsDiv.appendChild(postDiv);
        }
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsDiv = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {

        for (const commentItem of value) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            let commentPostIdDiv = document.createElement('div');
            commentPostIdDiv.innerText = 'post ID -' + commentItem.postId;

            let commentIdDiv = document.createElement('div');
            commentIdDiv.innerText = 'ID -' + commentItem.id;

            let commentNameDiv = document.createElement('div');
            commentNameDiv.innerText = commentItem.name;

            let commentEmailDiv = document.createElement('div');
            commentEmailDiv.innerText = commentItem.email;

            let commentBodyDiv = document.createElement('p');
            commentBodyDiv.innerText = commentItem.body;

            commentDiv.append(commentPostIdDiv, commentIdDiv, commentNameDiv, commentEmailDiv, commentBodyDiv);
            commentsDiv.appendChild(commentDiv);
        }
    })