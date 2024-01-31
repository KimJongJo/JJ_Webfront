
// 몬스터 정보

// 고블린
const Goblin = {
    name : "Goblin",    //이름
    hp : 20,            //체력
    attack : 8,         //공격력
    defense : 2,        //방어력
    expReward : 15,     //처치시 추가경험치
    dropRate : 0.5      //아이템 드랍확률
}

// 드래곤
const Dragon = {
    name : "Dragon",
    hp : 80,
    attck : 40,
    defense : 10,
    expReward : 70,
    dropRate : 100
}

// 고릴라
const Gorilla = {
    name : "Gorilla",
    hp : 50,
    attck : 20,
    defense : 5,
    expReward : 30,
    dropRate : 50
}

// 황소
const Cow = {
    name : "Cow",
    hp : 30,
    attack : 12,
    defense : 3,
    expReward : 20,
    dropRate : 10
}



// 남자 전사
const mWarrior = {
    job : '전사',
    gender : '남자',
    hp : 110,
    attack : 15,
    defense : 7
}

// 여자 전사
const wWarrior = {
    job : '전사',
    gender : '여자',
    hp : 100,
    attack : 12,
    defense : 9
}

// 남자 마법사
const mWizard = {
    job : '마법사',
    gender : '남자',
    hp : 90,
    attack : 25,
    defense : 3
}

// 여자 마법사
const wWizard = {
    job : '마법사',
    gender : '여자',
    hp : 95,
    attack : 20,
    defense : 5
}

    //내 캐릭터
// let mychar = {};

let monhp = 0;

// const monster = [Goblin,mWarrior,wWarrior,mWizard,wWizard];


// 캐릭터 생성

const start = document.querySelector("#start");

start.addEventListener("click", () => {
    const check = document.querySelector("#plus");
    const divC = document.querySelector(".ch");
    if(check.contains(divC)){
        alert("캐릭터가 존재합니다. 기존 캐릭터를 삭제한 후 생성해주세요");
        return;
    }

    //  이름 입력
    const Cname = prompt("캐릭터 이름을 입력하세요");

    // 직업 입력
    let Cjob;
    while(true){
        const test = prompt("캐릭터의 직업을 선택해주세요\n(전사, 마법사)");
        if(test == '전사' || test == '마법사'){
            Cjob = test;
            break;
        }else if(test == null){
            return;
        }else{
            alert("전사, 마법사 중 선택해주세요");
        }
    }

    // 성별 입력
    let Cgender;
    while(true){
        const test = prompt("캐릭터의 성별을 선택해주세요\n(남자, 여자)");
        if(test == '남자' || test == '여자'){
            Cgender = test;
            break;
        }else{
            if(test == null){
                return;
            }else alert("남자,여자 중 선택해주세요");
        }
    }

    
    
    let level = 1;
    let exp = 0;
    let gold = 0;


    // 추가될 견본
    // <div>
    //     <h3>캐릭터정보</h3>
    //     <div>
    //         * 캐릭터 스탯 *
    //         <div>

    //         </div>
    //         * 캐릭터 이미지 *
    //         <img></img>
    //     </div>
    // </div>

    
    const div = document.createElement("div");  // 가장 큰 틀
    div.setAttribute("class","ch");
    div.style.border="0.5px solid lightgray";
    div.style.backgroundColor="white";
    const del = document.createElement("button");

    del.innerHTML = `&times;`;
    del.setAttribute("class","delbutton");
    


    const h2 = document.createElement("h2");   // 캐릭터 정보
    h2.append("캐릭터 정보");
    h2.style.margin="30px 0 20px 15px";

    const under = document.createElement("div");    // 캐릭터, 이미지 틀
    under.style.display="flex";
    under.style.marginBottom="30px";
    const imp = document.createElement("div");  // 캐릭터 스탯

    const cn = document.createElement("div");  // 이름
    cn.append(`이름: ${Cname}`);
    const cj = document.createElement("div");    // 직업
    cj.append(`직업: ${Cjob}`);
    const cg = document.createElement("div");    // 성별
    cg.append(`성별: ${Cgender}`);
    const cl = document.createElement("div");    // 레벨
    cl.append(`레벨: ${level}`);
    const ch = document.createElement("div");    // HP
    switch(Cjob){
        case '전사' : switch(Cgender){
                                case "남자" : ch.append(`HP: ${mWarrior.hp}`); break;
                                case "여자" : ch.append(`HP: ${wWarrior.hp}`); break;
                            }; break;

        case '마법사' : switch(Cgender){
                                case '남자' : ch.append(`HP: ${mWizard.hp}`); break;
                                case '여자' : ch.append(`HP: ${wWizard.hp}`); break;
                            }; break;
    }
    
    const ca = document.createElement("div");    // 공격력
    switch(Cjob){
        case '전사' : switch(Cgender){
                                case "남자" : ca.append(`공격력: ${mWarrior.attack}`); break;
                                case "여자" : ca.append(`공격력: ${wWarrior.attack}`); break;
                            }; break;
        case '마법사' : switch(Cgender){
                                case '남자' : ca.append(`공격력: ${mWizard.attack}`); break;
                                case '여자' : ca.append(`공격력: ${wWizard.attack}`); break;
                            }; break;
    }

    const cd = document.createElement("div")    // 방어력
    switch(Cjob){
        case '전사' : switch(Cgender){
                                case "남자" : cd.append(`방어력: ${mWarrior.defense}`); break;
                                case "여자" : cd.append(`방어력: ${wWarrior.defense}`); break;
                            }; break;
        case '마법사' : switch(Cgender){
                                case '남자' : cd.append(`방어력: ${mWizard.defense}`); break;
                                case '여자' : cd.append(`방어력: ${wWizard.defense}`); break;
                            }; break;
    }

    const ce = document.createElement("div")    // 경험치
    ce.append(`경험치: ${exp}`);
    const cgold = document.createElement("div") // 골드
    cgold.append(`골드: ${gold}`);


    imp.append(cn, cj, cg, cl, ch, ca, cd, ce, cgold);

    // switch(Cjob){
    //     case '전사' : switch(Cgender){
    //                             case "남자" : 
    //                             for(let key in mWarrior){
    //                                 mychar[key] = mWarrior[key];
    //                             }; break;
    //                             case "여자" :
    //                                 for(let key in wWarrior){
    //                                     mychar[key] = wWarrior[key];
    //                                 }; break;
    //                         }; break;

    //     case '마법사' : switch(Cgender){
    //                             case '남자' :
    //                                 for(let key in mWizard){
    //                                     mychar[key] = mWizard[key];
    //                                 }; break;
    //                             case '여자' : 
    //                                 for(let key in wWizard){
    //                                     mychar[key] = wWizard[key];
    //                                 }; break;
    //                         }; break;
    // }
    

    // mychar = {
    //     name : `${Cname}`,
    //     job : `${Cjob.job}`,
    //     gender : `${Cjob.gender}`,
    //     level : `${level}`,
    //     hp : `${Cjob.hp}`,
    //     attack : `${Cjob.attack}`,
    //     defense : `${Cjob.defense}`,
    //     exp : `${exp}`,
    //     gold : `${gold}`
    // }

    imp.style.margin="10px 50px 20px 15px";

    const img = document.createElement("img");  // 캐릭터 이미지


    switch(Cjob){
        case '전사' : switch(Cgender){
                                case "남자" : img.setAttribute("src","../images/남자_전사.png"); break;
                                case "여자" : img.setAttribute("src","../images/여자_전사.png"); break;
                            }; break;

        case '마법사' : switch(Cgender){
                                case '남자' : img.setAttribute("src","../images/남자_마법사.png"); break;
                                case '여자' : img.setAttribute("src","../images/여자_마법사.png"); break;
                            }; break;
    }

    img.setAttribute("class", "imgSize");
    
    
    console.log(img);

    under.append(imp,img);
    div.append(del,h2, under);
    div.style.borderRadius="15px";
    div.style.backgroundImage='url("https://img.freepik.com/free-vector/glowing-background-with-bursting-rays_1017-32167.jpg")';
    div.style.backgroundSize="348px 369px";

    const plus = document.querySelector("#plus");   // 캐릭터 관련 엘리먼트 생성 후 최종 추가
    plus.append(div);

    del.addEventListener("click", () => {
        const d = confirm("캐릭터를 삭제하시겠습니까?");
        if(d){
            div.remove();
        }
    })

});


// 전투 시작
const fight = document.querySelector("#fight");

fight.addEventListener("click", () => {


    // 캐릭터가 존재하지 않을때
    const check = document.querySelector("#plus");
    const divC = document.querySelector(".ch");
    if(!check.contains(divC)){
        alert("캐릭터가 존재하지 않습니다. 캐릭터를 생성해주세요");
        return;
    }else{


        const chatting = document.querySelector("#chatting");
        // const mob = Math.floor(Math.random() * monster.length);
        const mob = Math.random();
        let mon;

        if(mob < 0.01){
            mon = Dragon;
        }else if(mob<0.2){
            mon = Gorilla;
        }else if(mob<0.4){
            mon = Cow;
        }else{
            mon = Goblin;
        }


        

        

        

        // 이미 전투중일때
        const cavech = document.querySelector(".cave");
        if(fight.contains(cavech)){
            alert("이미 전투중입니다!!!");
            return;
        }

        
        const div = document.createElement("div");
        div.setAttribute("class","cave");

        // 공격버튼
        // const attack = document.createElement("button");
        // const asym = document.createElement("i");
        // asym.setAttribute("class","fa-solid fa-hand-fist");
        // const attspan = document.createElement("span");
        // attspan.innerHTML = "공격하기";
        // attack.append(attspan,asym);

        // 공격하기



        
        // // 도망치기 버튼
        // const run = document.createElement("button");
        // run.setAttribute("class","run");
        // const sym = document.createElement("i");
        // sym.setAttribute("class","fa-solid fa-person-running");
        // const runspan = document.createElement("span");
        // runspan.innerHTML = "도망가기";
        // run.append(runspan, sym);

        // div.append(attack,run);

        fight.append(div);

        switch(mon.name){
            case 'Goblin' : monhp = 20;
            case 'Cow' : monhp = 30;
            case 'Gorilla' : monhp = 50;
            case 'Dragon' : monhp = 80;
        }

        setTimeout(function() {
            chatting.innerHTML += `${mon.name}이(가) 나타났다!!`;

            const mychar = Object.assign({}, mWarrior);

            let timeId;
            console.log("몬스터 체력 : ", mon.hp);
            console.log("전사 공격력 : ", mychar);
            console.log("몬스터 방어력 : ", mon.defense);
            

            // timeId = setInterval(() => {
            //     chatting.innerHTML += `${mychar.name}님이 공격했습니다.`
                
            // }, 1500)

            // if(parseInt(mon.hp, 10) <= 0){
            //     clearInterval(timeId);
            // }

        }, 1000)

        
    
        

        
    }
});


// const div = document.querySelector(".cave");
// const runs = document.querySelector(".run");
// if(fight.contains(div)){
//     //도망치기
//     runs.addEventListener("click", () => {
//         const green = confirm("전투에서 도망가시겠습니까?");
//         if(green){
//             alert("휴~ 살았다.")
//             div.remove();
//             chatting.innerHTML = "도망쳤다!";
//             return;
//         }
//         else{
//             return;
//         }
//     });
// }
    

    