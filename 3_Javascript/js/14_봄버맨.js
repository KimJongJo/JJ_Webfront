let xindex = 0; // x좌표 방향 이동한 값
let yindex = 0; // y좌표 방향 이동한 값

// addEventListener( "이벤트 종류", 함수(이벤트가 발생했을때 수행할 기능))
// 전달인자 2개

document.addEventListener("keydown", function(e) {

    const bomberman = document.getElementById("bomberman");

    switch(e.key){
        case 'ArrowRight' : xindex += 10; break;

        case 'ArrowLeft' : xindex -= 10; break;

        case 'ArrowUp' : yindex -= 10; break;

        case 'ArrowDown' : yindex += 10; break;

        case 'x' : const box = document.getElementById("box");
                    box.innerHTML += 
                    `<img src="../images/boom.png"
                    style="transform: translate3d(${xindex}px, ${yindex}px, 0); position: absolute;">`;
                    break;

        default:
            alert("방향키과 x만 가능"); break;
    }

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;

    
});



// let x = 0;
// let y = 0;

// document.addEventListener("keydown", function(e) {
//     const bomberman = document.getElementById("bomberman");

//     switch(e.key){
//         case 'ArrowUp' : y -= 10; break;
//         case 'ArrowDown' : y += 10; break;
//         case 'ArrowLeft' : x -= 10; break;
//         case 'ArrowRight' : x += 10; break;
//         case 'x' : const box = document.getElementById("box");
//         box.innerHTML += `<img src="../images/boom.png" style= "transform : translate3d(${x}px, ${y}px ,0);
//         position : absolute;">`;
//     }

//     bomberman.style.transform = `translate3d(${x}px, ${y}px, 0)`;


// });