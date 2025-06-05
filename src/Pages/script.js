// 1st javascript code
console.log("hello, Internet!");

const textArea = document.getElementById('inputTextArea');
const publishButton = document.getElementById('button');
const author = 'birdabo';

let allPosts = [];

function createPosts() {
    let postId = Date.now();

    const newPost = {
        id: postId,
        author: author,
        text: text,
        timeStamp: new Date().toLocaleDateString(),
        delete: button
    }

    allPosts.push(newPost);

    console.log("Post created:", newPost);
    console.log("All Posts:", allPosts);
}

publishButton.addEventListener('click', function(){
    const postsText = textArea.value; 

    if (postsText.trim() === ''){
        alert('the posts is empty. write something!');
        return;
    }

    createPosts('anonymous', postsText);
    textArea.value = '';

    console.log('Post has been published!');

});