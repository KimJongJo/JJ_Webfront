const numbers = document.querySelectorAll(".number");
const container = document.querySelector(".container");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

let i = "";

container.addEventListener("click", (e) => {
    
    if(i.length > 9){
        alert("10자까지 클릭해주세요");
        return;
    }
    
    
    switch(e.target){
        case numbers[0] : result.innerHTML += '1'; i += '1'; break;
        case numbers[1] : result.innerHTML += '2'; i += '2'; break;
        case numbers[2] : result.innerHTML += '3'; i += '3'; break;
        case numbers[3] : result.innerHTML += '4'; i += '4'; break;
        case numbers[4] : result.innerHTML += '5'; i += '5'; break;
        case numbers[5] : result.innerHTML += '6'; i += '6'; break;
        case numbers[6] : result.innerHTML += '7'; i += '7'; break;
        case numbers[7] : result.innerHTML += '8'; i += '8'; break;
        case numbers[8] : result.innerHTML += '9'; i += '9'; break;
        case numbers[9] : result.innerHTML += '0'; i += '0'; break;
    }
});


reset.addEventListener("click", () => {
    i = "";
    result.innerHTML = "";
});

