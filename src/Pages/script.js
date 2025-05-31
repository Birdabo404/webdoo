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

    if(postText.trim() === '') { //check if post is empty
        alert('Please write something.');
        return;
    }

    createPost('Anonymous', postText);

    textArea.value = '';
    displayPosts();
    console.log('Post has been submitted!');

});

let likePost = [];

//Post container func()
function displayPosts() {
    // Get the container where posts will go
    const container = document.getElementById('postsContainer');
    
    // Clear existing posts (so we don't duplicate)
    container.innerHTML = '';

    // Loop through each post and create HTML
    allPost.forEach(function(post) {
        // Create HTML for one post
        const postHTML = `
            <div class="bg-transparent p-4">
                <div class="flex items-center gap-3 mb-2">
                        <img class="w-8 h-8 rounded-full object-cover" src="../img/pfp.png" alt="profilePicture">
                    <span class="tracking-wide text-green-200 font-mono text-xs">@${post.author}</span>
                    <span class="text-gray-500 text-xs">${post.timestamp}</span>
                </div>
                <p class="px-11 text-yellow-50 font-mono text-sm mb-3">${post.text}</p>
                
                <button class="px-11 py-1 text-red-400 hover:text-red-300 text-sm" onclick="likePost(${post.id})">
                    ❤️ ${post.likes} likes
                </button>
            </div>
        `;
        container.innerHTML += postHTML;
    });
}

