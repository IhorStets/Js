// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const postItem of value) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post')
            postDiv.innerText = `post id - ${postItem.id}; ${postItem.body}`


            let btn = document.createElement('button');
            btn.innerText = 'show comments '
            btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                       let commentsDiv = document.createElement('div');
                       commentsDiv.classList.add('post-comment');
                        for (const commentItem of value) {
                            let comment = document.createElement('div');
                            comment.classList.add('comment')
                            comment.innerText = commentItem.body;
                            commentsDiv.appendChild(comment);
                        }
                       postDiv.appendChild(commentsDiv)
                    });
            };
            postDiv.appendChild(btn);
            postsDiv.appendChild(postDiv);
        }
    });