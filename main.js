var open = document.getElementById('open');
var close = document.getElementById('close');
let text = document.getElementById('text');


open.addEventListener('click', function() {
    open.style.display = 'none';
    close.style.display = 'block';
    text.style.display = 'block';
    text.style.transition = '.6s';
});
close.addEventListener('click', function() {
    close.style.display = 'none';
    open.style.display = 'block';
    text.style.display = 'none';
    text.style.transition = '.6s';
});


//card
let in_text = document.getElementById('in-text');
let submit = document.getElementById('submit');
let list = document.getElementById('list');



submit.addEventListener('click', function() {

    if (in_text.value == false) {
        alert("Please enter a valid task");
    } else {
        var newMessage = document.createElement("li");
        newMessage.innerHTML = in_text.value;
        list.appendChild(newMessage);
        in_text.value = "";
    }
});

let clear = document.getElementById('clear');
clear.addEventListener('click', function() {

    var mess = document.getElementsByTagName('li')
    mess.innerHTML = in_text.value;
    for (i = 0; i < list.childElementCount; i++) {
        while (list.hasChildNodes()) {
            list.removeChild(list.children[i]);
        }
    }
});