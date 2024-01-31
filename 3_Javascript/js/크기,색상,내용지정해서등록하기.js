const size = document.querySelector("#size");
const color = document.querySelector("#color");
const btn = document.querySelector("#apply");
const textBoard = document.querySelector("#content");
const plus = document.querySelector("#registration");

btn.addEventListener("click",() => {



    textBoard.style.fontSize = `${size.value}px`;
    textBoard.style.color = color.value;

});



plus.addEventListener("click", () => {
    const div = document.createElement("div");   // <div></div>
    div.append(textBoard.value);
    div.style.color = color.value;
    div.style.fontSize = `${size.value}px`;

    const result = document.querySelector("#result");
    result.append(div);

    textBoard.value = "";
});