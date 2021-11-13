

    const operationSelector = document.querySelector(".operation")
    const userInputSelector = document.querySelector(`.userInput`);
    
    const btnCLR = document.querySelector(`.btnCLR`);

    btnCLR.addEventListener("click" , () => {
        operationSelector.textContent = ``;
        userInputSelector.textContent = ``;
      });

    const btnDEL = document.querySelector(`.btnDEL`);
    btnDEL.addEventListener("click" , () => {
    userInputSelector.textContent = `DELETE ONE NUMBER FORM USERINPUT`;

        });

    
        const btn1 = document.querySelector(`.btn1`);
        const btn2 = document.querySelector(`.btn2`);
        const btn3 = document.querySelector(`.btn3`);
        const btnMUL = document.querySelector(`.btnMUL`);

        const btn4 = document.querySelector(`.btn4`);
        const btn5 = document.querySelector(`.btn5`);
        const btn6 = document.querySelector(`.btn6`);
        const btnDIV = document.querySelector(`.btnDIV`);

        const btn7 = document.querySelector(`.btn7`);
        const btn8 = document.querySelector(`.btn8`);
        const btn9 = document.querySelector(`.btn9`);
        const btnADD = document.querySelector(`.btnADD`);

        const btn0 = document.querySelector(`.btn0`);
        const btnDOT = document.querySelector(`.btnDOT`);
        const btnSUB = document.querySelector(`.btnSUB`);
        const btnEQL = document.querySelector(`.btnEQL`);



//From this point i'll add all the  btns



//here the btns funtions finishes.