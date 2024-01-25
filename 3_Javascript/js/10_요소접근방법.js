// 클래스 접근 테스트
function classTest(){
    
    // 유사 배열이란?
    // 배열처럼 index, length를 가지고 있으나
    // 배열 전용 기능(메서드)를 제공하지 않음
    // 제공하지 않음 : pop(), push()...

    // .cls-test 요소 모두 얻어오기
    // -> HTMLCollection ( == 유사배열 )
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);

    // divs 0, 1, 2 째 요소에 배경색 변경
    divs[0].style.backgroundColor = "#fb8500";
    divs[1].style.backgroundColor = "#ffb703";
    divs[2].style.backgroundColor = "#023047";
}




// 태그명으로 요소 접근하기
function tagNameTest(){

    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와
    // 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");

    console.log(tagList);

    for(let i = 0; i < tagList.length; i++){    //  순차접근

        // tagList[i].innerText = "abc" : 내용으로 "abc" 대입하기
        // tagList[i].innerText : 작성된 내용을 얻어오기

        tagList[i].style.backgroundColor = tagList[i].innerText;
    }

}



// name 으로 요소 접근하기
function nameTest(){
    // name 속성 값이 "hobby"인 요소를 모두 얻어와 변수에 저장

    const hobbyList = document.getElementsByName("hobby");
    
    // console.log(hobbyList);

    let str = "";   // 체크된 값 누적
    let count = 0;  // 체크된 수 카운트

    for(let i = 0; i < hobbyList.length; i++) {

        // checkbox, radio 전용 속성 (.checked)

        // input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
        // input요소.checked = true -> 해당 요소를 체크
        // input요소.checked = false -> 해당 요소를 체크 해제

        if(hobbyList[i].checked) {
            str += hobbyList[i].value + " ";
            count++;
        }

    }

    // #name-div 요소에 내용으로 결과 출력

    document.getElementById("name-div").innerHTML
        = `${str} <br><br>선택된 취미 개수 : ${count}`;

}



// css 선택자로 요소 접근하기
function cssTest(){

    /**
     * [요소 1개]
     * 1) document.querySelector("CSS 선택자");
     *          -> 선택자가 선택한 요소 중 첫번째 요소를 반환
     * 
     * [요소 n개 -> 배열]
     * 2) document.querySelectorAll("CSS 선택자");
     *          -> 선택한 요소 모두를 배열(유사배열) 형태로 반환
     */

    // target-div 속성 값이 "css-div" 요소에 접근
    const container = document.querySelector("[target-div = 'css-div']");

    // 요소의 테두리를 변경
    container.style.border = "10px solid red";

    // 첫번째 자식 div 접근해서
    // 내용을 "CSS 선택자로 선택해서 값 변경됨"
    const first = document.querySelector("[target-div = 'css-div'] > div");
    first.innerText = "CSS 선택자로 선택해서 값 변경됨";


    const last = document.querySelector("[target-div = 'css-div'] > div:last-child");
    last.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";


    // 모든 자식 div 한 번에 선택(배열)
    const divList = document.querySelectorAll("[target-div = 'css-div'] > div");

    console.log(divList);

    // index를 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";


    for(let i = 0; i < divList.length; i++){
        divList[i].onclick = function() {
            alert(`${i} 번째 요소 입니다!`);
        }
    }
}



// 카카오톡 모양의 채팅


function readValue(){
    
    // 채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg");

    // 채팅 내용 입력 input
    const input = document.querySelector("#user-input");

    // 입력된 값이 없을 경우
    // 1) 진짜 안적음
    // 2) 공백만 적음

    // 문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim().length == 0){
        alert("채팅 내용을 입력해주세요");

        input.value = "";   // 이전 input에 작성된 값 삭제

        input.focus();  // input에 커서가 활성화

        return; // 현재 수행중인 함수를 종료 + 호출한 곳으로 돌아감
    }

    //  채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollHeight   : bg의 스크롤 전체 높이
    // bg.scrollTop      : 스크롤 윗부분 위치
    // bg.scrollTop = 값; : 스크롤 윗부분을 값 위치로 이동
    // (값이 너무 크면 제일 밑으로 이동)

    bg.scrollTop = bg.scrollHeight;

    input.value = "";
    input.focus();
}


/*
    아이디가 user-input인 요소에서 
    키가 올라오는 동작이 발생했을 때(감지)
    올라온 키가 "Enter" 키 이면 readValue() 함수를 호출
*/

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keyup : 눌러지던 키가 떼어졌을 때 (1회만 인식)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {

    // e : 이벤트 객체 (발생한 이벤트 정보를 담고있는 객체)
    console.log(e);

    if(e.key == "Enter") {  // 엔터가 눌러졌을 때
        readValue();
    }

})

