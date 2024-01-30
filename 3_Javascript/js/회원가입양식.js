const id = document.querySelector("#id");   // 아이디 input
const pw1 = document.querySelector("#pw1"); // 비밀번호 input
const pw2 = document.querySelector("#pw2"); // 비밀번호확인 input
const name1 = document.querySelector("#name");  // 이름 input
const man = document.querySelector("#man"); // 남 input
const woman = document.querySelector("#woman"); // 여 input
const number = document.querySelector("#number");   // 전화번호 input





const checkObj = {
    inputId : false, // 아이디
    inputPw : false, // 비밀번호
    inputPwConfirm : false, // 비번확인
    inputName : false, // 이름
    gender : false, // 성별
    inputTel : false // 전화번호
}

// 아이디

id.addEventListener("keyup", (e) => {
    const regExp = /^[a-z][a-zA-Z\-\_0-9]{5,13}$/;

    if(regExp.test(e.target.value)){
        id.style.backgroundColor = "springgreen";
        checkObj.inputId = true;
    }else{
        id.style.backgroundColor = "white";
        checkObj.inputId = false;
    }
});

// 비밀번호



pw1.addEventListener("keyup", () => {
    const span = document.querySelector("#pwResult");

    if(pw2.value == "" || (pw1.value == "" && pw2.value == "")) span.innerHTML = "";

    else {
        if(pw1.value == pw2.value){
            span.innerHTML = "비밀번호 일치";
            span.style.color = "green";
            checkObj.inputPw = true;
            checkObj.inputPwConfirm = true;

        }else{
            span.innerHTML = "비밀번호 불일치";
            span.style.color = "red";
            checkObj.inputPw = false;
            checkObj.inputPwConfirm = false;
        }
    }
});


pw2.addEventListener("keyup", () => {
    
    if(pw1.value == ""){
        alert("비밀번호를 입력해주세요")
        pw2.value = "";
        pw1.focus();
    }
    
    else{
        
        const span = document.querySelector("#pwResult");

        if(pw1.value == pw2.value){
            span.innerHTML = "비밀번호 일치";
            span.style.color = "green";
            checkObj.inputPw = true;
            checkObj.inputPwConfirm = true;
        }else{
            span.innerHTML = "비밀번호 불일치";
            span.style.color = "red";
            checkObj.inputPw = false;
            checkObj.inputPwConfirm = false;
        }
        
    }
});

// 이름

const nameResult = document.querySelector("#nameResult");

name1.addEventListener("keyup", () => {
    const regExp = /^[가-힣]{2,5}$/;

    if(name1.value == ""){
        nameResult.innerHTML = "";
    }
    else if(regExp.test(name1.value)){
        nameResult.innerHTML = "정상입력"
        nameResult.style.color = "green";
        checkObj.inputName = true;
    }
    else{
        nameResult.innerHTML = "한글만 입력하세요";
        nameResult.style.color = "red";
        checkObj.inputName = false;
    }
});


// 초기화 버튼
const black = document.querySelector("#black");

black.addEventListener("click", () => {
    id.value = "";
    pw1.value = "";
    pw2.value = "";
    name1.value = "";
    number.value = "";
});


function validate() {
    const regExp = /^[0][1-2]{1,2}[0-9]{3,4}[0-9]{4}/;

    if(!man.checked && !woman.checked){
        alert("성별을 선택해주세요");
        checkObj.gender = false;
    }else{
        checkObj.gender = true;
    }


    if(!regExp.test(number.value)){
        alert("전화번호의 형식이 올바르지 않습니다");
        checkObj.inputTel = false;
    }else{
        checkObj.inputTel = true;
    }
}


// 회원가입 버튼
const newId = document.querySelector("#new");



newId.addEventListener("click", function(test) {

    validate();

    if(checkObj.inputId && checkObj.inputPw && checkObj.inputPwConfirm && checkObj.inputName && checkObj.gender && checkObj.inputTel){
        alert("회원가입 완료");
    }

    
    else{
        test.preventDefault();

    }
});


