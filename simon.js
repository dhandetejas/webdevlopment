let gameSeq = [];
let userSeq = [];
let failSound = new Audio("C:\\Users\\VICTUS\\Downloads\\fail.mp3"); // put your mp3 path here
failSound.load();

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red", "green","yellow", "blueviolet"];
document.addEventListener("keypress", function() {
    if(started === false) {
        console.log("Game started");
        started = true;
    }
    

    levelup();

});




function gameFlash(randbtn) {
randbtn.classList.add("flash");
setTimeout(function() {
randbtn.classList.remove("flash");
}, 200);
}


function userflash(randbtn) {
randbtn.classList.add("userflash");
setTimeout(function() {
randbtn.classList.remove("userflash");
}, 200);
}



 function checkans(idx){   // in this function we will check the user sequence with game sequence //
  console.log("curr level :",level);

  
  if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length === gameSeq.length) {
        setTimeout(levelup(), 1000);
  }
}
  else {
    h2.innerHTML = `game over! Your score was :<b>${level}</b> <br> press any key to restart`;
     document.querySelector("body").style.backgroundColor = "red";
    failSound.currentTime = 0;
    failSound.play();
    
     setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
     },200);
    reset();
  }
 }
function levelup(){
    userSeq = [];
    level++;
    h2.innerText =` level ${level}`;

    // random button flash 

    let randIdx = Math.floor(Math.random() * btns.length); // choose random index //
    let randcolor = btns[randIdx];             // choose random color using random index //
    let randbtn = document.querySelector(`.${randcolor}`);  //choose random button using random color //
    gameSeq.push(randcolor); // push random color to game sequence //
    gameFlash(randbtn);
    console.log(gameSeq);

   
}

function btnpress (){
   let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
    
   checkans(userSeq.length - 1);  // call checkans function to check the user sequence with game sequence //

   
}

let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click", btnpress); 
 }

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}










 