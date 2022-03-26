

var increment_button = document.getElementById("increment_button");
var second_element  = document.getElementById("second_element");


var elements = ['A' ,'B', 'C']
var index = 0;
var length = elements.length;
second_element.innerText = elements[index];

increment_button.addEventListener('click' , function () {
    index++;
    if(index > length -1) {
        index = 0;
    }
    second_element.innerText = elements[index];
});
