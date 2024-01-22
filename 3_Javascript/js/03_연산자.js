// 변수 선언

// document : HTML문서 내에서 
// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는

const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");

// console.log(number1);
// console.log(number2);
// console.log(result);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
    //input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;
    
    console.log(value1, value2);
}