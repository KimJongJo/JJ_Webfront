const how = document.querySelector("#how");
const btn = document.querySelector("#btn");
const sumBtn = document.querySelector("#sumBtn");
const container = document.querySelector("#container");


btn.addEventListener("click", () => {

    for(let i = 0; i < Number(how.value); i++){
        const input = document.createElement("input");  // <input>
        input.setAttribute("type", "number");   // <input type="number">
        input.setAttribute("class","input-number"); // <input type="number" class"input-number">
        container.append(input);
    }
});

sumBtn.addEventListener("click", () => {
    const list = document.querySelectorAll(".input-number");
    const span = document.querySelector("#result");
    let sum = 0;

    for(let i = 0; i < list.length; i++){
        sum += Number(list[i].value);
    }

    span.append(sum);
});
