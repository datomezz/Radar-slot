const spin = [new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3")];
const coin = new Audio("audio/coin.mp3");
const score_path = document.querySelector(".slot-score__text");
let result = document.querySelector(".slot-result__text");

let score = 1000;
function runSlot(){
    if(score <= 0){
        return alert("Your Balance is " + score);
    }
    score -= 20;
    score_path.innerHTML = score + "$";
    result.innerText = "Wait";

    let randPosition = Math.floor(Math.random() * 28);
    let randomSlot_1 = randPosition + Math.floor(Math.random() * 7 +1);
    let randomSlot_2 = randPosition + 4*6 + Math.floor(Math.random() * 7 +1);
    let randomSlot_3 = randPosition + 6*6 + Math.floor(Math.random() * 7 +1);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let sound = 0;

    let slot_1 = setInterval(spin1, 80);
    let slot_2 = setInterval(spin2, 80);
    let slot_3 = setInterval(spin3, 80);

    function spin1(){
        count1++;
        let initCount = 0;
        initCount++;
        let currentSlot = document.querySelector("#first");
        if(count1 >= randomSlot_1){
            coin.play();
            clearInterval(slot_1);
        }
        if(currentSlot.className === "slot slot_7"){
            currentSlot.className = "slot slot_1";
            initCount = 0;
        }
        currentSlot.className = "slot slot_" + (parseInt(currentSlot.className.substring(10, 11)) + initCount);
    }
    function spin2(){
        count1++;
        let initCount = 0;
        initCount++;
        let currentSlot = document.querySelector("#second");
        if(count1 >= randomSlot_2){
            coin.play();
            clearInterval(slot_2);
        }
        if(currentSlot.className === "slot slot_7"){
            currentSlot.className = "slot slot_1";
            initCount = 0;
        }
        currentSlot.className = "slot slot_" + (parseInt(currentSlot.className.substring(10, 11)) + initCount);
    }
    function spin3(){
        count1++;
        let initCount = 0;
        initCount++;
        sound++;
        spin[sound].play();
        if(sound == 6){
            sound = 0;
        }
        let currentSlot = document.querySelector("#third");
        if(count1 >= randomSlot_3){
            coin.play();
            clearInterval(slot_3);
            chooseWinner();
        }
        if(currentSlot.className === "slot slot_7"){
            currentSlot.className = "slot slot_1";
            initCount = 0;
        }
        currentSlot.className = "slot slot_" + (parseInt(currentSlot.className.substring(10, 11)) + initCount);
    }
}
function chooseWinner(){
    const first = document.querySelector("#first").className;
    console.log(first);
    const second = document.querySelector("#second").className;
    console.log(second);
    const third = document.querySelector("#third").className;
    console.log(third);

    if(first === second && second === third){
        if(first === "slot slot_1"){
            score += 10000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_2"){
            score += 2000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_3"){
            score += 1500;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_4"){
            score += 1000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_5"){
            score += 500;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_6"){
            score += 100;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first === "slot slot_7"){
            score == 0;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } 
    } else {
        score -= 20;
        score_path.innerHTML = score + "$";
        result.innerText = "You Lose";
    }
}