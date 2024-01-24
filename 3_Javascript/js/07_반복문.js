/*
for(let num = 1; num <= 5; num++) {
    // 조건식이 true인 경우 반복 수행할 코드;
    console.log("통과")
}
*/

function check1(){

    let result = "";    // 빈 문자열

    for(let num = 1; num <= 5; num++){
        // console.log(num);

        result += num;
        // result = result + num;
        //     "1"                      = "" + 1 (1턴)
        //    "12"                   = "1" + "2" (2턴)
        //   "123"             = "1" + "2" + "3" (3턴)
        //  "1234"       = "1" + "2" + "3" + "4" (4턴)
        // "12345" = "1" + "2" + "3" + "4" + "5" (5턴)
    }
    
    console.log(result);
}

function check2() {
    // 1부터 10까지 1씩 증가하며 출력
    for(let num = 1; num <= 10; num++){
        console.log(num);
    }
}

function check3(){
    // 1부터 20까지 1씩 증가하며 출력
    for(let num = 1; num <= 20; num++){
        console.log(num);
    }
}

function check4(){
    // 5부터 15까지 1씩 증가하며 출력
    for(let num = 5; num <= 15; num++){
        console.log(num);
    }
}

function check5(){
    // 1부터 30까지 2씩 증가하며 출력
    for(let num = 1; num <= 30; num += 2){
        console.log(num);
    }
}

function check6(){
    // 1부터 10까지 모든 정수의 합
    let sum = 0;
    for(let num = 1; num <= 10; num++){
        sum += num;
    }
    console.log(sum);
}
// 입력받은 범위 내 모든 정수의 합 구하기
const start1 = document.getElementById("inputNumber1-1");
const end1 = document.getElementById("inputNumber1-2");
const result1 = document.getElementById("result1");

function sumFn(){
    const st = Number(start1.value);
    const ed = Number(end1.value);
    let sum = 0;

    for(let num = st; num <= ed; num++){
        sum += num;
    }
    result1.innerText = sum;
}


const result2 = document.getElementById("result2");

function executeFn2(){


    const start2 = Number(document.getElementById("inputNumber2-1").value);
    const end2 = Number(document.getElementById("inputNumber2-2").value);
    const up = Number(document.getElementById("inputNumber2-3").value);
    const ul = document.getElementById("result2");
    ul.innerHTML = "";  // 이전 ul에 작성된 내용을 모두 삭제


    for(let num = start2; num <= end2; num += up){
        
        ul.innerHTML += `<li>${num}</li>`;
    }
}

// 요쇼.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대임
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


function executeFn3(){
    const dan = Number(document.getElementById("input3").value);
    const gugu = document.getElementById("result3");
    let gob = 0;

    gugu.innerHTML = "";

    // 입력 받은 단이 2~9 사이가 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기

    if(dan < 2 || dan > 9){
        alert("2~9사이만 입력해주세요")
        return; //  함수를 종료하고 호출한 곳으로 돌아감
                //  함수 종료 정도로만 인식
    }
    
    for(let num = 1; num < 10; num++){
        gob = dan * num;
        gugu.innerHTML += `<li>${dan} x ${num} = ${gob}</li>`;
    }
    
}

/* 다음 모양 출력하기
12345
12345
12345
12345
*/

function check8(){
    
    // 4바퀴 반복하는 for문
    for(let i = 1; i < 5; i++){

        // "12345" 출력하는 구문
        let str = "";
        for(let j = 1; j < 6; j++){
            str += j;
        }
        console.log(str);
    }
}

/* 다음 모양 출력하기
1
12
123
1234
12345
*/

function check9(){
    for(let i = 1; i < 6; i++){
        let str = "";
        for(let j = 1; j <= i; j++){
            str += j;
        }
        console.log(str);
    }
}

//  while 문 확인
function check16(){
    
    // 변수를 선언만 해두기
    let val;    // undefined

    // 취소를 누르기 전까지 반복
    while(val !== null){

        // 동일 비교 연산자
        // !== -> 값, 자료형이 모두 다른경우 true
        // === -> 값, 자료형이 모두 같은경우 true

        val = prompt("입력 후 확인");   // 변수에 prompt값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);
    }
}

// 메뉴 주문하기
function check17(){

    // 메뉴 가격
    const gimbap = 3000;        //김밥
    const ramen = 3500;         //라면
    const donkkaseu = 5000;     //돈까스

    // 주문 개수 카운트
    let gCount = 0;         // 김밥
    let rCount = 0;         // 라면
    let dCount = 0;         // 돈까스

    // prompt로 입력한 값을 저장할 변수 선언
    let input;      //undefined

    // 확인 -> 입력한 값
    // 취소 -> null


    while(input !== null){  //취소 누르기 전까지 반복

        input = prompt("메뉴 번호를 입력하세요");

        switch(input){
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요");break;
        }

    }
    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);

    alert(`총 가격 : ${sum}원`);
    
}

function check18(){

    //  1부터 10까지 출력

    let num = 1;
    while(num < 11){
        console.log(num);
        num++;
    }


    console.log("------------------------")

    // 10부터 1 까지 1씩 감소 (while)

    let num2 = 10;
    while(num2 > 0){
        console.log(num2);
        num2--;
    }

}