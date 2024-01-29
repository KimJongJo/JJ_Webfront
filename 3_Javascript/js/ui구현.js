const fWidth = document.querySelector("#width")  // 너비
const fHeight = document.querySelector("#height")    // 높이

const fSize = document.querySelector("#f-size") // 글자크기
const sizeN = document.querySelector("#w-normal")   //보통사이즈
const sizeB = document.querySelector("#w-bold")     //굵은사이즈

const fColor = document.querySelector("#f-color")    // 글자색
const bColor = document.querySelector("#f-bColor")  // 배경색

const cLeft = document.querySelector("#c-left")     // 가로 왼쪽
const cCenter = document.querySelector("#c-center")     // 가로 가운데

const rUp = document.querySelector("#r-up") // 세로 위
const rCenter = document.querySelector("#r-center") // 세로 가운데

const inputBox = document.querySelector("#inputbox")    // 출력문자열

const btn = document.querySelector("#btn")  //적용버튼

const body = document.querySelector("body") //바디태그



btn.addEventListener("click", () => {

    // div 만들기
    const div = document.createElement("div");  //  <div></div>
    // div 클래스 만들기
    div.setAttribute("class","nDiv");   //  <div class="nDiv"></div>

    // 만들어진 div 너비
    div.style.width = `${fWidth.value}px`;

    // 만들어진 div 높이
    div.style.height = `${fHeight.value}px`;

    // 글자크기
    div.style.fontSize = `${fSize.value}px`

    // 체크된 굵기로 변경
    if(sizeN.checked){
        div.style.fontWeight = "normal";
    }else   div.style.fontWeight = "bold";

    // 글자 색
    div.style.color = fColor.value;

    // 배경색
    div.style.backgroundColor = bColor.value;

    // 체크된 기준으로 가로정렬
    if(cLeft.checked){
        div.style.justifyContent = "flex-start";
    }else if(cCenter.checked){
        div.style.justifyContent = "center";
    }else{
        div.style.justifyContent = "flex-end";
    }


    // 체크된 기준으로 세로정렬
    if(rUp.checked){
        div.style.alignItems = "flex-start";
    }else if(rCenter.checked){
        div.style.alignItems = "center";
    }else {
        div.style.alignItems = "flex-end";
    }

    // 출력 문자열 넣기
    div.append(`${inputBox.value}`);


    

    // 만들어진 div를 body자식으로 추가
    body.append(div);
});