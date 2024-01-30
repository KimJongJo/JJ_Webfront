const apple = document.querySelector("#apple");
const banana = document.querySelector("#banana");
const melon = document.querySelector("#melon");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
    let sum = 0;
    let string = "";

    const divs = document.querySelectorAll(".row");



    if(apple.checked){
        const A = divs[0].lastElementChild.value;
        sum += A * 2000;
        string += `사과 ${A}개 `;
    }

    if(banana.checked){
        const B = divs[1].lastElementChild.value;
        sum += B * 3000;
        string += `바나나 ${B}개 `;
    }

    if(melon.checked){
        const M = divs[2].lastElementChild.value;
        sum += M * 5000;
        string += `멜론 ${M}개 `;
    }

    string += `총합 ${sum}원`;
    result.append(string);


});