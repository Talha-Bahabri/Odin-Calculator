

    const operationSelector = document.querySelector(".operation");
    const userInputSelector = document.querySelector(`.userInput`);
    let tempValuesInput = 0 ;
    
//From this point i'll add all the  btns

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
        btn1.addEventListener("click" , () => {
            userInputSelector.textContent = `1`;
        
                });
        const btn2 = document.querySelector(`.btn2`);
        btn2.addEventListener("click" , () => {
            userInputSelector.textContent = `2`;
        
                });
        const btn3 = document.querySelector(`.btn3`);
        btn3.addEventListener("click" , () => {
            userInputSelector.textContent = `3`;
        
                });
        const btn4 = document.querySelector(`.btn4`);
        btn4.addEventListener("click" , () => {
            userInputSelector.textContent = `4`;
        
                });
        const btn5 = document.querySelector(`.btn5`);
        btn5.addEventListener("click" , () => {
            userInputSelector.textContent = `5`;
        
                });
        const btn6 = document.querySelector(`.btn6`);
        btn6.addEventListener("click" , () => {
            userInputSelector.textContent = `6`;
        
                });

        const btn7 = document.querySelector(`.btn7`);
        btn7.addEventListener("click" , () => {
            userInputSelector.textContent = `7`;
        
                });
        const btn8 = document.querySelector(`.btn8`);
        btn8.addEventListener("click" , () => {
            userInputSelector.textContent = `8`;
        
                });
        const btn9 = document.querySelector(`.btn9`);
        btn9.addEventListener("click" , () => {
            userInputSelector.textContent = `9`;
        
                });
        const btn0 = document.querySelector(`.btn0`);
        btn0.addEventListener("click" , () => {
            userInputSelector.textContent = `0`;
        
                });
        const btnDOT = document.querySelector(`.btnDOT`);
        btnDOT.addEventListener("click" , () => {
            userInputSelector.textContent = `.`;
        
                });
        const btnMUL = document.querySelector(`.btnMUL`);
        btnMUL.addEventListener("click" , () => {
            userInputSelector.textContent = ` * `;
        
                });
        const btnDIV = document.querySelector(`.btnDIV`);
        btnDIV.addEventListener("click" , () => {
            userInputSelector.textContent = ` / `;
        
                });
        const btnADD = document.querySelector(`.btnADD`);
        btnADD.addEventListener("click" , () => {
            userInputSelector.textContent = ` + `;
        
                });
        
        const btnSUB = document.querySelector(`.btnSUB`);
        btnSUB.addEventListener("click" , () => {
            userInputSelector.textContent = ` - `;
        
                });
        const btnEQL = document.querySelector(`.btnEQL`);

//here the btns funtions finishes.

// a variable will hold the numbers as string and every num btn clicked will add to the string then change it to float
// will create an array , this array will hold the entered values IF AND ONLY IF one of the operations btns are clicked
//      * The array would be like : array = ["1.5" , " + " , "10" , "-" , "20"] 
//      * MAKE SURE THE USER CAN'T ENTER TWO OPERATIONS TOGETHER , to do that check if the last elemnt is num or OP
//      * result = 0  num = 0  op = "" 
//      * enter loop  for each elemnt , check if the elemnt is a number. num = elemnt CONTINUE to restart the loop
//      * if you want you can check online how to check if the datatype are eql
//      * the second elemnt will be OP , result = result OP num ... repeat
//                      === for example  result = 1.5 + 10 
//      *
// once the EQL operation is clicked the userInput will be removed and the result will be displayed there


