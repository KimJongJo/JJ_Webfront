// prompt 사용 연습
function test(){

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) { // 취소
        alert("취소");
    } else { // 확인
        
        if(password == '1234'){
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치!!!");
        }
    }
}



// 입출금 하기
const output = document.getElementById("output");   //  잔액
const amount = document.getElementById("amount");   //  금액
let won = 10000;    //  시작 금액
const password = "1234" //  비밀번호

output.innerText = won;

function deposit(){ //  입금
    
    if(amount.value.length == 0){
        alert("금액을 입력해주세요");
    }else{
        const put = Number(amount.value);   //  금액
            won += put;
            output.innerText = won;

            amount.value = '';
    }
    
    
}

function withdrawal() {

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요");

    } else {

        const pw = prompt("비밀번호를 입력하세요");

        if(password == null) {
            alert("취소");
        
        }else {

            // 비밀번호가 일치하지 않을 경우
            if(pw != password) {
                alert("비밀번호가 일치하지 않습니다");

            } else { // 비밀번호가 일치하는 경우

                const money = Number(amount.value);

                // 출금할 금액이 잔액 보다 큰 경우
                if(money > won) {
                    alert("출금 금액이 잔액보다 클 수 없습니다");

                } else { // 출금할 금액이 잔액보다 작거나 같은 경우

                    
                    won -= money;
                    output.innerText = won;
                    amount.value = ''; // input 에 작성된 값 제거

                    alert(`${money}원이 출금 되었습니다. 남은 잔액 ${won}`);
                }
            }

        }
    }

}




