const nums = document.querySelectorAll(".btn");
const input = document.querySelector("#look");
const append = document.querySelector("#append");
const black = document.querySelector("#black");

let i = "";
// 버튼이 클릭되었을 때 input창에 표시
document.addEventListener("click", (e) => {
   let key = e.target;
   
   switch(key){
    case nums[0] :
         input.innerHTML += '1'; i += '1'; break;
    case nums[1] :
         input.innerHTML += '2'; i += '2'; break;
    case nums[2] :
         input.innerHTML += '3'; i += '3'; break;
    case nums[3] :
         input.innerHTML += '4'; i += '4'; break;
    case nums[4] :
         input.innerHTML += '5'; i += '5'; break;
    case nums[5] :
         input.innerHTML += '6'; i += '6'; break;
    case nums[6] :
         input.innerHTML += '7'; i += '7'; break;
    case nums[7] :
         input.innerHTML += '8'; i += '8'; break;
    case nums[8] :
         input.innerHTML += '9'; i += '9'; break;
    case nums[9] :
         input.innerHTML += '#'; break;
    case nums[10] :
         input.innerHTML += '0'; i += '0'; break;
    case nums[11] :
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
    li.append(i);


    // 별 넣을 태그 만들기 span
    const star = document.createElement("i");
    star.setAttribute("class", "fa-regular fa-star");
    star.setAttribute("id", "star");
//     star.innerHTML = "☆";


    // 엑스 넣을 태그 만들기 span
    const cross = document.createElement("span");
    cross.setAttribute("class", "cross");
    cross.innerHTML = "&times;";

    // 별과 엑스를 넣을 stardiv 태그 만들기
    const stardiv = document.createElement("stardiv");

    // stardiv에 넣기(별, 엑스)
    stardiv.append(star, cross);

    //전화번호, 별, 삭제 div에 넣기
    div.append(li, stardiv);

    //div 전화번호목록에 넣기
    right.append(div);


    // 전화번호목록에 등록 했으니 
    i = "";
    input.innerHTML = "";

    let j = true;

    star.addEventListener("click", (e) => {
        
     /*
          <div>
               <span></span>
               <div>
                    <i></i>
                    <span></span>
               </div>
          </div>

     */

        if(j == true){
            e.target.style.color = "orange";
            e.target.style.fontWeight = "bold";
            e.target.parentElement.previousElementSibling.style.color = "red";
            j = false;
        }else{
            e.target.style.color = "black";
            e.target.style.fontWeight = "normal";
            e.target.parentElement.previousElementSibling.style.color = "black";
            j = true;
        }

    })

    cross.addEventListener("click", () => {
        cross.parentElement.parentElement.remove();
    })
    
   });


   // 초기화 버튼
black.addEventListener("click", () => {
    input.innerHTML = "";
    i = "";
})