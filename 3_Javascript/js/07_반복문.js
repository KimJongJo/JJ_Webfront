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
    const gugu = (document.getElementById("result3"));
    let gob = 0;

    gugu.innerHTML = "";
    
    for(let num = 1; num < 10; num++){
        gob = dan * num;
        gugu.innerHTML += `<li>${dan} * ${num} = ${gob}</li>`;
    }
}