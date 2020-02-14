let winCount = 0;
const one = document.getElementById("button1");
let input1 = document.getElementById("card1");
let input2 = document.getElementById("card2");
let input3 = document.getElementById("card3");
let input4 = document.getElementById("card4");
let input5 = document.getElementById("card5");
one.addEventListener("click", function() {
  if (card1.value === "successful" && winCount <= 4) {
    alert("對了，恭喜");
    winCount++;
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (card1.value !== "successful" && winCount <= 4) {
    alert("錯了繼續猜");
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (winCount >= 4) {
    document.getElementsByClassName("victory")[0].style.display = "block";
    document.getElementsByClassName("victory")[1].style.display = "block";
  }
});

// if (condition){
//     block of code
// }else {
//     the else block of code
// }

const two = document.getElementById("button2");
two.addEventListener("click", function() {
  if (input2.value === "be careful" && winCount <= 4) {
    alert("對了，恭喜");
    winCount++;
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (input2.value !== "be careful" && winCount <= 4) {
    alert("錯了繼續猜");
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (winCount >= 4) {
    document.getElementsByClassName("victory")[0].style.display = "block";
    document.getElementsByClassName("victory")[1].style.display = "block";
  }
});
const three = document.getElementById("button3");
three.addEventListener("click", function() {
  if (input3.value === "felicitations and prosperity" && winCount <= 4) {
    alert("對了，恭喜");
    winCount++;
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (input3.value !== "felicitations and prosperity" && winCount <= 4) {
    alert("錯了繼續猜");
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (winCount >= 4) {
    document.getElementsByClassName("victory")[0].style.display = "block";
    document.getElementsByClassName("victory")[1].style.display = "block";
  }
});
const four = document.getElementById("button4");
four.addEventListener("click", function() {
  if (input4.value === "bicycle" && winCount <= 4) {
    alert("對了，恭喜");
    winCount++;
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (input4.value !== "bicycle" && winCount <= 4) {
    alert("錯了繼續猜");
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (winCount >= 4) {
    document.getElementsByClassName("victory")[0].style.display = "block";
    document.getElementsByClassName("victory")[1].style.display = "block";
  }
});
const five = document.getElementById("button5");
five.addEventListener("click", function() {
  if (input5.value === "China" && winCount <= 4) {
    alert("對了，恭喜");
    winCount++;
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (input5.value !== "China" && winCount <= 4) {
    alert("錯了繼續猜");
    document.getElementsByClassName("victory")[0].style.display = "none";
    document.getElementsByClassName("victory")[1].style.display = "none";
  } else if (winCount >= 4) {
    document.getElementsByClassName("victory")[0].style.display = "block";
    document.getElementsByClassName("victory")[1].style.display = "block";
  }
});
// function getVic() {
//   if (winCount == 5) {
//     document.getElementsByClassName("victory").style.display = flex;
//   }
// }
