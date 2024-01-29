const id = document.querySelector("#id");
const pw1 = document.querySelector("#pw1");
const pw2 = document.querySelector("#pw2");


id.addEventListener("keyup", (e) => {
    const regExp = /^[a-z][a-zA-Z\-\_]{6,14}/;

    if(regExp.test(e.target.value)){
        id.style.backgroundColor = "springgreen";
    }
});

let i = false;

pw2.addEventListener("keyup", () => {
    

    if(pw1.value == ""){
        alert("비밀번호를 입력해주세요")
        pw2.innerHTML = "";
        pw1.focus();
    }
    else{
        if(pw1.value == pw2.value){

            if(i == true){
                return;
            }
            else if(pw2.nextElementSibling == true){
                pw2.nextElementSibling.remove();
            }
            const span = document.createElement("span");
            const rp = document.querySelector("#rightPw");
            span.append("비밀번호 일치");
            span.style.color = "green";
            rp.append(span);

            i = true;
        }else if(pw1.value != pw2.value){
            if(i == false){
                return;
            }
            else if(pw2.nextElementSibling == true){
                pw2.nextElementSibling.remove();
            }

            const span = document.createElement("span");
            const rp = document.querySelector("#rightPw");
            span.append("비밀번호 불일치");
            span.style.color = "red";
            rp.append(span);

        }
    }
});