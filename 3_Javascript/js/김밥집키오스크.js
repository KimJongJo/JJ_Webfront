

let menu1 = 0;  //  김밥
let menu2 = 0;  //  라면
let menu3 = 0;  //  튀김
let menu4 = 0;  //  떡볶이
let menu5 = 0;  //  돈까스
let menu6 = 0;  //  우동

let sum = 0;    // 합계




function addToCart(menu, won) {

    const emptyCart = document.querySelector("#empty-cart")
    // 안보이게 설정
    emptyCart.style.display="none";

    // 보이게 설정
    const cart = document.querySelector("#cart");
    cart.style.display="block";

    
    switch(menu){
        case '김밥' : check('김밥',menu1);  break;
        case '라면' : check('라면', menu2);  break;
        case '튀김' : check('튀김', menu3); break;
        case '떡볶이' :check('떡볶이', menu4);  break;
        case '돈까스' : check('돈까스', menu5); break;
        case '우동' : check('우동', menu6); break;
    }


    function check(menu ,count) {

        // 처음나온 메뉴라면
        if(count == 0){
            count++;

            switch(menu){
                case '김밥' : menu1 = 1; sum+=won;  break;
                case '라면' : menu2 = 1; sum+=won;  break;
                case '튀김' : menu3 = 1; sum+=won;  break;
                case '떡볶이' :menu4 = 1; sum+=won;  break;
                case '돈까스' :menu5 = 1; sum+=won;  break;
                case '우동' :menu6 = 1; sum+=won;  break;
            }

            // 빼기/수량/추가, 메뉴, 삭제
            const div = document.createElement("div");
    
            // 빼기/수량/추가
            const left = document.createElement("span");
            left.setAttribute("class","quantity");

            const mBtn = document.createElement("button");
            mBtn.setAttribute("class","minus");
            mBtn.append('-');
            
            const pBtn = document.createElement("button");
            pBtn.setAttribute("class","plus");
            pBtn.append('+');

            const center = document.createElement("span");
            center.setAttribute("class","update");
            center.append(count);
    
            left.append(mBtn, center, pBtn);
    
            // 메뉴
            const menuName = document.createElement("span");
            menuName.append(menu);
    
    
            // 삭제
            const right = document.createElement("button");
            right.setAttribute("class","delete-button");
            right.innerHTML = '&times;';
    
            
            // 조합
            div.setAttribute("class","cart-item");
            div.append(left,  menuName, right);
            cart.append(div);

            // 삭제하기
            right.addEventListener("click", (e) => {
                e.target.parentElement.remove();

                switch(menu){
                    case '김밥' : sum-= won*menu1; menu1 = 0; break;
                    case '라면' : sum-= won*menu2; menu2 = 0; break;
                    case '튀김' : sum-= won*menu3; menu3 = 0; break;
                    case '떡볶이' : sum-= won*menu4; menu4 = 0; break;
                    case '돈까스' : sum-= won*menu5; menu5 = 0; break;
                    case '우동' : sum-= won*menu6; menu6 = 0; break;
                }
            });

            // 마이너스
            mBtn.addEventListener("click", (e) => {
                
                switch(menu){
                    case '김밥' : menu1--; check(menu1); center.innerHTML = menu1; sum-=won; break;
                    case '라면' : menu2--; check(menu2); center.innerHTML = menu2; sum-=won; break;
                    case '튀김' : menu3--; check(menu3); center.innerHTML = menu3; sum-=won; break;
                    case '떡볶이' : menu4--; check(menu4); center.innerHTML = menu4; sum-=won; break;
                    case '돈까스' : menu5--; check(menu5); center.innerHTML = menu5; sum-=won; break;
                    case '우동' : menu6--; check(menu6); center.innerHTML = menu6; sum-=won; break;
                }

                function check(e) {
                    if(e == 0){
                        div.remove();
                    }
                }
                
                

                
            });

            // 플러스
            pBtn.addEventListener("click", (e) => {
                
                switch(menu){
                    case '김밥' : center.innerHTML = ++menu1; sum+=won; break;
                    case '라면' : center.innerHTML = ++menu2; sum+=won; break;
                    case '튀김' : center.innerHTML = ++menu3; sum+=won; break;
                    case '떡볶이' : center.innerHTML = ++menu4; sum+=won; break;
                    case '돈까스' : center.innerHTML = ++menu5; sum+=won; break;
                    case '우동' : center.innerHTML = ++menu6; sum+=won; break;
                }

            });

            
    
        }

        else{
            // document.querySelectorAll("#cart").addEventListener("click");

            // cart.addEventListener("click", (e) => {

            //     const span = document.querySelectorAll(".update");

            //     console.log(e.target);

                // span[0].value.innerHTML = ++menu1;
                // sum+=won;
                // switch(menu){
                   
                //     case '김밥' : menu1++; span[0].innerHTML = menu1; sum+=won; break;
                //     case '라면' : menu2++; e.target.innerHTML = menu2; sum+=won; break;
                //     case '튀김' : menu3++; center.innerHTML = menu3; sum+=won; break;
                //     case '떡볶이' : menu4++; center.innerHTML = menu4; sum+=won; break;
                //     case '돈까스' : menu5++; center.innerHTML = menu5; sum+=won; break;
                //     case '우동' : menu6++; center.innerHTML = menu6; sum+=won; break;
                // }
            // });
            
            // switch(menu){
                   
            //     case '김밥' : menu1++; span.innerHTML = menu1; sum+=won; break;
            //     case '라면' : menu2++; span.innerHTML = menu2; sum+=won; break;
            //     case '튀김' : menu3++; center.innerHTML = menu3; sum+=won; break;
            //     case '떡볶이' : menu4++; center.innerHTML = menu4; sum+=won; break;
            //     case '돈까스' : menu5++; center.innerHTML = menu5; sum+=won; break;
            //     case '우동' : menu6++; center.innerHTML = menu6; sum+=won; break;
            // }
        }
    }
}

const money = document.querySelector("#total");

document.addEventListener("click", () => {
    money.innerHTML = `합계: ₩${sum}`;

    if(sum == 0){
        // 보이게 설정
        const emptyCart = document.querySelector("#empty-cart")
        emptyCart.style.display="block";

        // 안보이게 설정
        const cart = document.querySelector("#cart");
        cart.style.display="none";
    }
});

