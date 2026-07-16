const button = document.querySelector(".roll");
const dots = document.querySelectorAll(".dot");
const rollSound = new Audio("C:\\Users\\VICTUS\\Downloads\\dice.mp3");

button.addEventListener("click", () => {
    rollSound.currentTime = 0;
     rollSound.play();
  let rollAnimation = setInterval(() => {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log("rolling:", num);
  }, 200);

  setTimeout(() => {
    clearInterval(rollAnimation);

    let num = Math.floor(Math.random() * 6) + 1;
    console.log("final:", num);
   

    dots.forEach(dot => {
      dot.style.display = "none";
    });

    if (num >= 1) dots[0].style.display = "block";
    if (num >= 2) dots[1].style.display = "block";
    if (num >= 3) dots[2].style.display = "block";
    if (num >= 4) dots[3].style.display = "block";
    if (num >= 5) dots[4].style.display = "block";
    if (num >= 6) dots[5].style.display = "block";
  }, 1000);
});