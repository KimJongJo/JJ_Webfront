const boxs = document.querySelectorAll(".box");
const inputs = document.querySelectorAll(".color-input"); 

document.querySelector("#changeButton").addEventListener("click", function() {
    for(let i = 0; i < inputs.length; i++){
        boxs[i].style.backgroundColor = inputs[i].value;
    }
});