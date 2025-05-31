// Trying out my first js script.
console.log("hello internet! :)");
console.log("why are you using inspect element lol.")

let allPost = [];
//function to create post
function createPost(author, text) {
    const postId = Date.now();

        const newPost = {
            id: postId,
            author: author,
            text: text, 
            timestamp: new Date().toLocaleDateString(),
            likes: 0
        };

        allPost.push(newPost);

        console.log("Post created:", newPost);
        console.log("all Post:", allPost);
}

const textArea = document.getElementById('postTextArea');
const submitButton = document.getElementById('button');

submitButton.addEventListener('click', function(){
    const postText = textArea.value;

    if(postText.trim() === '') {
        alert('Please write something.');
        return;
    }

    createPost('Anonymous', postText);

    textArea.value = '';
    console.log('Post has been submitted!');
});