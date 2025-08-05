let clickTimer = null;
let currentPlayer = "X";
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const btns = () => {
  const boxes = document.querySelectorAll("#board button"); // ✅ get all buttons inside #board

  for (let box of boxes) {
    box.disabled = true;
  }
};
const message = (winner) => {
  let msg = document.querySelector(".msg");
  console.log("Message function called");

  msg.textContent = `Congratulations! You are the winner ${winner}`;
  msg.classList.remove("hide");
  setTimeout(() => {
    msg.classList.add("hide"); // ✅ Hide again after 3 seconds
  }, 1500);
};
const mes = () => {
  let msg = document.querySelector(".msg");
  console.log("Message function called");

  msg.textContent = `Draw match`;
  msg.classList.remove("hide");
  setTimeout(() => {
    msg.classList.add("hide"); // ✅ Hide again after 3 seconds
  }, 1500);
};
function checkWinner() {
  if (
    b1.textContent !== "" &&
    b1.textContent === b2.textContent &&
    b2.textContent === b3.textContent
  ) {
    message(b1.textContent);
    btns();
  } else if (
    b4.textContent !== "" &&
    b4.textContent === b5.textContent &&
    b5.textContent === b6.textContent
  ) {
    message(b4.textContent);
    btns();
  } else if (
    b7.textContent !== "" &&
    b7.textContent === b8.textContent &&
    b8.textContent === b9.textContent
  ) {
    message(b7.textContent);

    btns();
  } else if (
    b1.textContent !== "" &&
    b1.textContent === b5.textContent &&
    b5.textContent === b9.textContent
  ) {
    message(b1.textContent);

    btns();
  } else if (
    b3.textContent !== "" &&
    b3.textContent === b5.textContent &&
    b5.textContent === b7.textContent
  ) {
    message(b3.textContent);
    btns();
  } else if (
    b1.textContent !== "" &&
    b1.textContent === b4.textContent &&
    b4.textContent === b7.textContent
  ) {
    message(b1.textContent);

    btns();
  } else if (
    b2.textContent !== "" &&
    b2.textContent === b5.textContent &&
    b5.textContent === b8.textContent
  ) {
    message(b2.textContent);

    btns();
  } else if (
    b3.textContent !== "" &&
    b3.textContent === b6.textContent &&
    b6.textContent === b9.textContent
  ) {
    message(b3.textContent);

    btns();
  }
  else if(b1.textContent !=="" && 
    b2.textContent !== "" && 
    b3.textContent !== "" && 
    b4.textContent !== "" && 
    b5.textContent !=="" && 
    b6.textContent !== "" && 
    b7.textContent !== "" && 
    b8.textContent !== "" &&
    b9.textContent !==""
  ){
    mes();
    }
}

document.querySelector("#board").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && currentPlayer === "X") {
    console.log("You clicked button:", e.target.id); // shows b1, b2, etc.
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      e.target.textContent = "X";
      currentPlayer = "O";
      e.target.disabled = true;
      clickTimer = setTimeout(() => {
        checkWinner();
        e.target.disabled = true; // 4. Check winner after short delay
      }, 250);
    }, 250);
  } else if (e.target.tagName === "BUTTON" && currentPlayer === "O") {
    console.log("You clicked button:", e.target.id); // shows b1, b2, etc.
    clearTimeout(clickTimer);
    e.target.textContent = "O";
    currentPlayer = "X";
    e.target.disabled = true;
    clickTimer = setTimeout(() => {
      checkWinner();
      e.target.disabled = true; // 4. Check winner after short delay
    }, 250);
  }
});
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  const buttons = document.querySelectorAll("#board button");
  buttons.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
  });
  currentPlayer = "X";
});
