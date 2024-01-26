const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const nL = document.getElementById("nL");
const n0 = document.getElementById("n0");
const nR = document.getElementById("nR");

const input = document.querySelector("#look");

const append = document.querySelector("#append");
const black = document.querySelector("#black");

let i = "";
// 버튼이 클릭되었을 때 input창에 표시
document.addEventListener("click", (e) => {
   let key = e.target;


   switch(key.id){
    case "n1" :
         input.innerHTML += '1'; i += '1'; break;
    case "n2" :
         input.innerHTML += '2'; i += '2'; break;
    case "n3" :
         input.innerHTML += '3'; i += '3'; break;
    case "n4" :
         input.innerHTML += '4'; i += '4'; break;
    case "n5" :
         input.innerHTML += '5'; i += '5'; break;
    case "n6" :
         input.innerHTML += '6'; i += '6'; break;
    case "n7" :
         input.innerHTML += '7'; i += '7'; break;
    case "n8" :
         input.innerHTML += '8'; i += '8'; break;
    case "n9" :
         input.innerHTML += '9'; i += '9'; break;
    case "nL" :
         input.innerHTML += '#'; break;
    case "n0" :
         input.innerHTML += '0'; i += '0'; break;
    case "nR" :
         input.innerHTML += '*'; break;
   }

});

// 버튼이 눌렸을때 input창에 표시
document.addEventListener("keydown", (e) => {

    switch(e.key){
        case '1' :
             input.innerHTML += '1'; i += '1'; break;
        case '2' :
             input.innerHTML += '2'; i += '2'; break;
        case '3' :
             input.innerHTML += '3'; i += '3'; break;
        case '4' :
             input.innerHTML += '4'; i += '4'; break;
        case '5' :
             input.innerHTML += '5'; i += '5'; break;
        case '6' :
             input.innerHTML += '6'; i += '6'; break;
        case '7' :
             input.innerHTML += '7'; i += '7'; break;
        case '8' :
             input.innerHTML += '8'; i += '8'; break;
        case '9' :
             input.innerHTML += '9'; i += '9'; break;
        case '0' :
             input.innerHTML += '0'; i += '0'; break;
       }
});


// 추가버튼 눌렀을때
append.addEventListener("click", () => {

    if(i == ""){
        return;
    }

    // 추가버튼 눌렀을때 전화 번호 목록에 추가
    // 1) 전화번호, 별, 삭제, 넣어줄 div 생성
    const div = document.createElement("div");
    div.setAttribute("id", "list")

    // 2) 전화번호 담을 span 생성
    const li = document.createElement("span");

    // 3) li에 전화번호 입력
    li.innerHTML = i;


    // 별 넣을 태그 만들기 span
    const star = document.createElement("i");
    star.setAttribute("class", "fa-regular fa-star");
    star.setAttribute("id", "star");
//     star.innerHTML = "☆";


    // 엑스 넣을 태그 만들기 span
    const cross = document.createElement("span");
    cross.innerHTML = "&times;";

    //전화번호, 별, 삭제 div에 넣기
    div.append(li, star, cross);

    //div 전화번호목록에 넣기
    right.append(div);

    i = "";
    input.innerHTML = "";

    let j = true;

    star.addEventListener("click", (e) => {
        

        if(j == true){
            e.target.style.color = "orange";
            e.target.style.fontWeight = "bold";
            e.target.previousElementSibling.style.color = "red";
            j = false;
        }else{
            e.target.style.color = "black";
            e.target.style.fontWeight = "normal";
            e.target.previousElementSibling.style.color = "black";
            j = true;
        }

    })

    cross.addEventListener("click", () => {
        cross.parentElement.remove();
    })
    
   });


   // 초기화 버튼
black.addEventListener("click", () => {
    input.innerHTML = "";
    i = "";
})