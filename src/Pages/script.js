// Trying out my first js script.
console.log("hello internet! :)");
console.log("why are you using inspect element lol.")

const textArea = document.getElementById('postTextArea');
const button = document.getElementById('button');

button.addEventListener('click', function() {
    console.log("clicked!");
    console.log("post contains: ", textArea.value)
});

