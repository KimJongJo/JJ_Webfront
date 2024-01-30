const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

let number = 1;
let count = 0;


createBtn.addEventListener("click", () => {
    
    for(let i = 0; i < 9; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "line");
        div.style.display="flex";
        for(let i = 0; i < 5; i++){
            const span = document.createElement("span");
            span.setAttribute("class", "number");
            span.append(number);
            number++;
            div.append(span);
        }
        
        lottoBoard.append(div);
    }
});

lottoBoard.addEventListener("click", (e) => {


    if(count > 5){
        alert("6개 번호만 눌러주세요");
        return
    }
    if(e.target.className == "number"){
        e.target.classList.add("active");
        count++;
    }

    
});