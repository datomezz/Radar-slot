const spin = [new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3"),new Audio("audio/spin.mp3")];
const coin = new Audio("audio/coin.mp3");
const score_path = document.querySelector(".slot-score__text");
let dashBoard = document.querySelector(".slot-result");

let result = document.querySelector(".slot-result__text");
let score = 1000;

function runSlot(){
    document.querySelector(".slot-spin").style.pointerEvents = "none";
    if(score <= 0){
        return alert("Your Balance is " + score);
    }

    dashBoard.style.background = "#f9ca24";
    score -= 20;
    score_path.innerHTML = score + "$";
    result.innerText = "Wait";

    let randPosition = Math.floor(Math.random() * 28);
    let randomSlot_1 = randPosition + Math.floor(Math.random() * 7 +1);
    let randomSlot_2 = randPosition + 30 + Math.floor(Math.random() * 7 +1);
    let randomSlot_3 = randPosition + 60 + Math.floor(Math.random() * 7 +1);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let sound = 0;

    let slot_1 = setInterval(spin1, 50);
    let slot_2 = setInterval(spin2, 50);
    let slot_3 = setInterval(spin3, 50);

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
        count2++;
        let initCount = 0;
        initCount++;
        let currentSlot = document.querySelector("#second");
        if(count2 >= randomSlot_2){
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
        count3++;
        let initCount = 0;
        let currentSlot = document.querySelector("#third");
        initCount++;
        sound++;
        spin[sound].play();
        if(sound == 6){
            sound = 0;
        }
        if(count3 >= randomSlot_3){
            coin.play();
            chooseWinner();
            document.querySelector(".slot-spin").style.pointerEvents = "";
            clearInterval(slot_3);
        }
        if(currentSlot.className === "slot slot_7"){
            currentSlot.className = "slot slot_1";
            initCount = 0;
        }
        currentSlot.className = "slot slot_" + (parseInt(currentSlot.className.substring(10, 11)) + initCount);
        
    }
}
function chooseWinner(){
    let first = parseInt(document.querySelector("#first").className.substring(10, 11));
    let second = parseInt(document.querySelector("#second").className.substring(10, 11));
    let third = parseInt(document.querySelector("#third").className.substring(10, 11)) + 1;


    console.log(first,second,third);

    if(first == second && first == third && second == third || first + 7 == third){
        dashBoard.style.background = "#6ab04c";

        if(first == 1 || first == 1 && second == 1 && third == 8){
            score += 10000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 2){
            score += 2000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 3){
            score += 1500;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 4){
            score += 1000;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 5){
            score += 500;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 6){
            score += 250;
            score_path.innerHTML = score + "$";
            result.innerText = "You Win";
        } else if(first == 7){
            score -= score;
            score_path.innerHTML = score + "$";
            result.innerText = "You FUCKED";
        }
    } else if(first == second || second == third){
        dashBoard.style.background = "#6ab04c";
        score += 50;
        score_path.innerHTML = score + "$";
        result.innerText = "You Win";
    }
    else {
        dashBoard.style.background = "#eb4d4b";
        score_path.innerHTML = score + "$";
        result.innerText = "You Lose";
    }
}
window.addEventListener("keydown", function(event){
    if(event.keyCode == "32" && document.querySelector(".slot-spin").style.pointerEvents == ""){
        runSlot();
    }
});
