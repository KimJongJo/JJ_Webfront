let menus = [0, 0, 0, 0, 0, 0];

let sum = 0;
let choice = 0;

function addToCart(menu, won){


    const emptyCart = document.querySelector("#empty-cart");
    const cart = document.querySelector("#cart");

    emptyCart.style.display="none";
    cart.style.display="block";



    sum += won;

    let wh = "";


    switch(menu){
        case '김밥' : key = menus[0]++; choice = 0; wh = '김밥'; break;
        case '라면' : key = menus[1]++; choice = 1; wh = '라면'; break;
        case '튀김' : key = menus[2]++; choice = 2; wh = '튀김'; break;
        case '떡볶이' : key = menus[3]++; choice = 3; wh = '떡볶이'; break;
        case '돈까스' : key = menus[4]++; choice = 4; wh = '돈까스'; break;
        case '제육덮밥' : key = menus[5]++; choice = 5; wh = '제육덮밥'; break;
    }

    if(key == 0){
    
        // 장바구니에 수량과 메뉴이름 삭제버튼이 있는 div 생성

        // (-,수량,+) , 메뉴이름 , 삭제
        const div = document.createElement("div");  //  <div></div>
        div.setAttribute("class","cart-item");

        const left = document.createElement("span");    //  <span></span>
        left.setAttribute("class","quantity");

        // - 버튼
        const minus = document.createElement("button")  //  <button></button>
        minus.setAttribute("class","minus");
        minus.append("-");

        //  수량
        const span = document.createElement("span");
        span.setAttribute("class", "sum")

        switch(wh){
            case '김밥' : span.setAttribute("class","menu1"); break;
            case '라면' : span.setAttribute("class","menu2"); break;
            case '튀김' : span.setAttribute("class","menu3"); break;
            case '떡볶이' : span.setAttribute("class","menu4"); break;
            case '돈까스' : span.setAttribute("class","menu5"); break;
            case '제육덮밥' : span.setAttribute("class","menu6"); break;
        }

        span.innerHTML = 1;

        // + 버튼
        const plus = document.createElement("button")   //  <button></button>
        plus.setAttribute("class","plus");
        plus.append("+");

        left.append(minus,span,plus);


        // 메뉴이름
        const menuName = document.createElement("span");    //  <span></span>
        menuName.innerHTML = menu;

        // 삭제버튼
        const cross = document.createElement("button");    //  <button></button>
        cross.setAttribute("class","delete-button");
        cross.innerHTML = `&times;`;

        div.append(left,menuName,cross);

        
        cart.append(div);

        // 마이너스 버튼
        minus.addEventListener("click", (e) => {
            switch(menu){
                case '김밥' : sum -= won; check(--menus[0]); span.innerHTML = menus[0]; break;
                case '라면' : sum -= won; check(--menus[1]); span.innerHTML = menus[1]; break;
                case '튀김' : sum -= won; check(--menus[2]); span.innerHTML = menus[2]; break;
                case '떡볶이' : sum -= won; check(--menus[3]); span.innerHTML = menus[3]; break;
                case '돈까스' : sum -= won; check(--menus[4]); span.innerHTML = menus[4]; break;
                case '제육덮밥' : sum -= won; check(--menus[5]); span.innerHTML = menus[5]; break;
            }

            function check(e){
                if(e == 0){
                    div.remove();
                }
            }
        });

        plus.addEventListener("click", (e) => {
            switch(menu){
                case '김밥' : sum +=won; ++menus[0]; span.innerHTML = menus[0]; break;
                case '라면' : sum +=won; ++menus[1]; span.innerHTML = menus[1]; break;
                case '튀김' : sum +=won; ++menus[2]; span.innerHTML = menus[2]; break;
                case '떡볶이' : sum +=won; ++menus[3]; span.innerHTML = menus[3]; break;
                case '돈까스' : sum +=won; ++menus[4]; span.innerHTML = menus[4]; break;
                case '제육덮밥' : sum +=won; ++menus[5]; span.innerHTML = menus[5]; break;
            }
        });
        
         


        // 삭제 기능
        cross.addEventListener("click", (e) => {
            e.target.parentElement.remove();

            switch(menu){
                case '김밥' : sum -= menus[0]*won; menus[0] = 0; break;
                case '라면' : sum -= menus[1]*won; menus[1] = 0; break;
                case '튀김' : sum -= menus[2]*won; menus[2] = 0; break;
                case '떡볶이' : sum -= menus[3]*won; menus[3] = 0; break;
                case '돈까스' : sum -= menus[4]*won; menus[4] = 0; break;
                case '제육덮밥' : sum -= menus[5]*won; menus[5] = 0; break;
            }

            total.innerHTML = `합계 ₩${sum}`; 
            
        });

    }
    else {
        let value = "";
        let go = 0;

        switch(wh){
            case '김밥' : value = "menu1"; go = menus[0];
            const span1 = document.querySelector(".menu1"); span1.innerHTML = go; break;
            case '라면' : value = "menu2"; go = menus[1];
            const span2 = document.querySelector(".menu2"); span2.innerHTML = go; break;
            case '튀김' : value = "menu3"; go = menus[2];
            const span3 = document.querySelector(".menu3"); span3.innerHTML = go; break;
            case '떡볶이' : value = "menu4"; go = menus[3];
            const span4 = document.querySelector(".menu4"); span4.innerHTML = go; break;
            case '돈까스' : value = "menu5"; go = menus[4];
            const span5 = document.querySelector(".menu5"); span5.innerHTML = go; break;
            case '제육덮밥' : value = "menu6"; go = menus[5];
            const span6 = document.querySelector(".menu6"); span6.innerHTML = go; break;

        }
    }


    // 합계가 0으로 되면 장바구니가 비어있음 표시
    document.addEventListener("click", () => {

        if(sum == 0){

            const emptyCart = document.querySelector("#empty-cart");
            const cart = document.querySelector("#cart");
        
            emptyCart.style.display="block";
            cart.style.display="none";

        }

             // 합계
     const total = document.querySelector("#total");

     total.innerHTML = `합계 ₩${sum}`; 

    });
}
