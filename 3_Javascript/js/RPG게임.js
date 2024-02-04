
// 몬스터 정보

// 고블린
const Goblin = {
    name : "고블린",    //이름
    hp : 20,            //체력
    attack : 8,         //공격력
    defense : 2,        //방어력
    expReward : 15,     //처치시 추가경험치
    dropRate : 0.5,      //아이템 드랍확률
    gold : 3
}

// 드래곤
const Dragon = {
    name : "드래곤",
    hp : 80,
    attack : 40,
    defense : 10,
    expReward : 70,
    dropRate : 0.9,
    gold : 50
}

// 고릴라
const Gorilla = {
    name : "고릴라",
    hp : 50,
    attack : 20,
    defense : 5,
    expReward : 30,
    dropRate : 0.7,
    gold : 30
}

// 황소
const Cow = {
    name : "황소",
    hp : 30,
    attack : 12,
    defense : 3,
    expReward : 20,
    dropRate : 0.5,
    gold : 10
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

let mychar;
let myname;
let level = 1;
let hp = 0;
let attack = 0;
let defense = 0;
let exp = 0;
let gold = 50;




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
    if(Cname == ""){
        alert("이름을 입력해주세요");
        return;
    }else if(Cname == null){
        return;
    }else{
        myname = Cname;
    }

    const chatting = document.querySelector("#chatting");
    chatting.innerHTML = "캐릭터가 생성되었습니다. \n";
    

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
    cl.setAttribute("class","level");
    cl.append(`레벨: ${level}`);
    const ch = document.createElement("div");    // HP
    ch.setAttribute("class","hp");
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
    ca.setAttribute("class","attack");
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
    cd.setAttribute("class","defense");
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
    ce.setAttribute("class", "exp");
    ce.append(`경험치: ${exp}`);
    const cgold = document.createElement("div") // 골드
    cgold.setAttribute("class","gold");
    cgold.append(`골드: ${gold}`);


    imp.append(cn, cj, cg, cl, ch, ca, cd, ce, cgold);

    switch(Cjob){
        case '전사' : switch(Cgender){
                                case "남자" : 
                                    mychar = mWarrior; break;
                                case "여자" :
                                    mychar = wWarrior; break;
                            }; break;

        case '마법사' : switch(Cgender){
                                case '남자' :
                                    mychar = mWizard; break;
                                case '여자' : 
                                    mychar = wWarrior; break;
                            }; break;
    }


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


    hp = mychar.hp;
    attack = mychar.attack;
    defense = mychar.defense;

    img.setAttribute("class", "imgSize");
   

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
            chatting.innerHTML = "";
        }
    })


       // 상점이용
       const buy = document.querySelector("#buy");
       const shp = document.querySelector(".hp");
       const sattack = document.querySelector(".attack");
       const sdefense = document.querySelector(".defense");
   
   
       buy.addEventListener("click",() => {
           const sgold = document.querySelector(".gold");
   
           let num = 0;
           let need = 0;
           const item = prompt(`무엇을 구매하시겠습니까?\n(검, 방패, 물약)`);
   
           if(item == '검'){
               num = 1;
           }else if(item == '방패'){
               num = 2;
           }
           else if(item == '물약'){
               num = 3;
           }else{
               alert("없는 물건입니다.");
           }
   
           switch(num){
               case 1 : need = 20; break;
               case 2 : need = 15; break;
               case 3 : need = 10; break;
           }
   
           if(gold < need){
               alert("골드가 부족합니다.");
           }
           else{
               gold -= need;
               sgold.innerHTML = `골드: ${gold}`;
   
   
               switch(num){
                   case 1 : sattack.innerHTML = `공격력: ${mychar.attack += 5}`; break;
                   case 2 : sdefense.innerHTML = `방어력: ${mychar.defense += 3}`; break;
                   case 3 : shp.innerHTML = `HP: ${mychar.hp += 20}`; break;
               }
   
           }
       });
 

});









// 전투 시작
const startFight = document.querySelector("#startFight");

startFight.addEventListener("click", () => {
    

    const shp = document.querySelector(".hp");
    const sattack = document.querySelector(".attack");
    const sdefense = document.querySelector(".defense");

    // 캐릭터가 존재하지 않을때
    const check = document.querySelector("#plus");
    const divC = document.querySelector(".ch");
    if(!check.contains(divC)){
        alert("캐릭터가 존재하지 않습니다. 캐릭터를 생성해주세요");
        return;
    }else{
        const slevel = document.querySelector(".level");
        
        const chatting = document.querySelector("#chatting");
        




        // 이미 전투중일때
        const cavech = document.querySelector(".cave");
        if(fight.contains(cavech)){
            alert("지금은 전투중입니다.");
            return;
        }else{
            chatting.innerHTML += `전투를 시작합니다. \n \n`;
        }


        // 나올 몬스터 확률로 소환
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

        let monhp = mon.hp;


        // 몬스터가 나올 동굴 이미지
        const div = document.createElement("div");
        const monimg = document.createElement("img");

        switch(mon.name){
            case '고블린' : monimg.setAttribute("src","https://cdn.imweb.me/thumbnail/20201010/7a695c37e004f.png"); monimg.classList.add("goblin"); break;
            case '황소' : monimg.setAttribute("src","https://i.namu.wiki/i/mWFscSnzck6WSRqiYpsu_C8lkvKPbdXtmAx1est6SM3gOWpkWkJjzX2HuwpcRbed0GksmfonHJ0rVu-Gka4QZQ.webp"); monimg.classList.add("cow"); break;
            case '고릴라' : monimg.setAttribute("src","../images/고릴라.png"); monimg.classList.add("gorilla"); break;
            case '드래곤' : monimg.setAttribute("src","../images/드래곤.png"); monimg.classList.add("dragon"); break;
        }
        monimg.classList.add("monimg");
        div.append(monimg);

        div.setAttribute("class","cave");
        // 1.5초 뒤에 몬스터 출몰
        setTimeout(()=>{
            fight.append(div);
        }, 1500);



        let timeId;
        let state;

        setTimeout(function() {
            chatting.innerHTML += `${mon.name}이(가) 나타났다!!  \n \n`;
            
            chatting.scrollTop = chatting.scrollHeight;
            const sexp = document.querySelector(".exp");
            const sgold = document.querySelector(".gold");
            const shp = document.querySelector(".hp");

            

            timeId = setInterval(() => {
                
                // 몬스터를 공격 했을때

                chatting.innerHTML += `몬스터의 남은 체력 : ${mon.hp} \n${myname}님이 ${mon.name}을 공격하셨습니다. \n`;
                chatting.scrollTop = chatting.scrollHeight;
                mon.hp -= mychar.attack - mon.defense;


                // 몬스터를 처치 했을때
                if(mon.hp <= 0){
                    chatting.innerHTML += `${mon.name}을 처치하셨습니다. \n${mon.expReward}Exp+  ${mon.gold}G+ \n`;
                    chatting.scrollTop = chatting.scrollHeight;
                    exp += mon.expReward;
                    gold += mon.gold;
                    sexp.innerHTML = `경험치: ${exp}`;
                    sgold.innerHTML = `골드: ${gold}`;
                    mon.hp = monhp;

                    
                    
                    chatting.scrollTop = chatting.scrollHeight;

                    monimg.setAttribute("src","../images/몬스터 처치.png");

                    setTimeout(() => {
                        div.remove();
                    }, 1500)

                    // 캐릭터 레벨업 (경험치 100 이상)

                    if(exp >= 100){
                        level += 1;
                        slevel.innerHTML = `레벨: ${level}`;
                        exp -= 100;
                        sexp.innerHTML = `경험치: ${exp}`;
                    }

                    
                    

                    clearInterval(timeId); 
                    clearInterval(state); return;

                    

                }

                // 몬스터가 공격 했을때
                

                chatting.innerHTML += `${mon.name}이(가) ${myname}님을 공격하였습니다. \n \n`;
                chatting.scrollTop = chatting.scrollHeight;
                if(mychar.defense > mon.attack){
                    chatting.innerHTML += "몬스터의 공격이 빗나갔습니다. \n"
                }else{
                    mychar.hp -= (mon.attack - mychar.defense);
                }
                
                shp.innerHTML = `HP: ${mychar.hp}`;

                // 내 캐릭터가 사망했을때
                if(mychar.hp <= 0){
                    
                    const chdiv = document.querySelector(".ch");
                    const nextImg = document.querySelector(".imgSize");
                    nextImg.setAttribute("src","../images/몬스터 처치.png");
                    
                    
                    chatting.innerHTML += "캐릭터가 사망했습니다.";
                    chatting.scrollTop = chatting.scrollHeight;
                    div.remove();
                    setTimeout(() => {
                        chdiv.remove();
                    }, 1500);
                    clearInterval(timeId);
                    clearInterval(state); return;
                }
    

            }, 2000);

            state = setInterval(() => {
                // console.log(mon.expReward);
                
                
                

                slevel.innerHTML = `레벨: ${level}`;
                shp.innerHTML = `HP: ${mychar.hp}`;
                sattack.innerHTML = `공격력: ${mychar.attack}`;
                sdefense.innerHTML = `방어력: ${mychar.defense}`;
                
                


            }, 1000);

   

        }, 1500)

  
       
    }
    
});
