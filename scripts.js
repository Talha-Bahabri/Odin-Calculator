

    const operationSelector = document.querySelector(".operation");
    const userInputSelector = document.querySelector(`.userInput`);

    let tempValuesInput = `` ;
    let num1 ;
    let num2 ;
    let operand = ``;
    let result = 0 ;
    let firstTime = true;
    let isEqlPressed = false;
    
//From this point i'll add all the  btns
// window.addEventListener(`keydown`, (event) => { 
//     if (event.key == `Backspace`) {
//         alert(`bababoya`);
//     }
// });

    const btnCLR = document.querySelector(`.btnCLR`);
    btnCLR.addEventListener("click" , clr );

    const btnDEL = document.querySelector(`.btnDEL`);
    btnDEL.addEventListener("click" , del );
    window.addEventListener("keydown", (event) => {
        if (event.key == `Backspace` || event.key == `Delete` ) {
          del();
        }
      });

    
    
        const btn1 = document.querySelector(`.btn1`);
        btn1.addEventListener("click" , function(e) {
            onNumberClick(1);
        });


        const btn2 = document.querySelector(`.btn2`);
        btn2.addEventListener("click" , function(e) {
            onNumberClick(2);
        });

        const btn3 = document.querySelector(`.btn3`);
        btn3.addEventListener("click" , function(e) {
            onNumberClick(3);
        });
        const btn4 = document.querySelector(`.btn4`);
        btn4.addEventListener("click" , function(e) {
            onNumberClick(4);
        });
        const btn5 = document.querySelector(`.btn5`);
        btn5.addEventListener("click" ,function(e) {
            onNumberClick(5);
        });
        const btn6 = document.querySelector(`.btn6`);
        btn6.addEventListener("click" ,function(e) {
            onNumberClick(6);
        });

        const btn7 = document.querySelector(`.btn7`);
        btn7.addEventListener("click" ,function(e) {
            onNumberClick(7);
        });
        const btn8 = document.querySelector(`.btn8`);
        btn8.addEventListener("click" ,function(e) {
            onNumberClick(8);
        });
        const btn9 = document.querySelector(`.btn9`);
        btn9.addEventListener("click" ,function(e) {
            onNumberClick(9);
        });
        const btn0 = document.querySelector(`.btn0`);
        btn0.addEventListener("click" ,function(e) {
            onNumberClick(0);
        });
        const btnDOT = document.querySelector(`.btnDOT`);
        btnDOT.addEventListener("click" ,function(e) {
            onNumberClick(`.`);
        });



        const btnADD = document.querySelector(`.btnADD`);
        btnADD.addEventListener("click" , function(e) {
            onOperandClick(`+`);
        });          


        const btnMUL = document.querySelector(`.btnMUL`);
        btnMUL.addEventListener("click" , function(e) {
            onOperandClick(`*`);
        }); 

        const btnDIV = document.querySelector(`.btnDIV`);
        btnDIV.addEventListener("click" , function(e) {
            onOperandClick(`/`);
        });       

        const btnSUB = document.querySelector(`.btnSUB`);
        btnSUB.addEventListener("click" , function(e) {
            onOperandClick(`-`);
        });       

        const btnEQL = document.querySelector(`.btnEQL`);
        btnEQL.addEventListener("click" , () => {
            
            isEqlPressed = true;
            conditionsForOperations();
            operand = ``;


                });

 

        function onNumberClick(theNumber) {

            tempValuesInput = tempValuesInput.concat(theNumber);
            userInputSelector.textContent = tempValuesInput;
        }

        function onOperandClick(theOperand) {
            if(firstTime){
            operand = `${theOperand}`;
            }
    
            conditionsForOperations();
            operand = `${theOperand}`;

        }

        function conditionsForOperations() {

            // if no value is entred ... it will not do anything
            if(tempValuesInput == `` ) {
                console.log(`empty tempValuesInput`)
                return 0 ;
            }

            //if the last elemnt in the is number, or not empty , it will enter and add the numbers , at the end 
                                                    // it will add the operand 
            if(tempValuesInput != '') {
                if(firstTime) {
                    num1 = parseFloat(tempValuesInput);
                    console.log(`FIRST TIME num1 = ${num1} type ${typeof(num1)}`)

                    displayText()
                    firstTime = false;
                    tempValuesInput = ``;
                    return 0 ;
                }

                num2 = parseFloat(tempValuesInput);

                tempValuesInput = ``;
                console.log(`SECOND TIME  num2 = ${num2} type ${typeof(num2)} `)
                operations();
            }  
            
        }


        function operations() {
            

                    switch(operand) {
                        case `+`:
                            
                          result = add();
                          break;
                        case `-`:
                          result = sub();
                          break;
                        case `*`:
                            result = mul();
                          break;
                        case `/`:
                          result = div();
                          break;

                        default:
                            console.log(`${operand}`)
                            console.log(`error`);
                            return 0
                          
                      } 

                      console.log(`result = ${result} num1 = ${num1} num2 = ${num2}`);
                      num1 = result;

                      if(isEqlPressed) {
                        operationSelector.textContent = `${num1}`;
                        isEqlPressed = false;
                      }
                      else {
                        operationSelector.textContent = `${num1} ${operand}`;
                      }

                      userInputSelector.textContent = ``;
                      // result = 0;


                }

        function displayText() {

            operationSelector.textContent = ``;
                if (firstTime) {
                    operationSelector.textContent = `${num1} ${operand} `;
                    userInputSelector.textContent = ``;
                    return 0;
                }

                userInputSelector.textContent = ``;
                operationSelector.textContent = `${num1} ${operand} ${num2}`;

        }



        function add() {
            return num1 + num2;  
        }
        function sub() {
            return num1 - num2; 
        }
        function div() {
            return  num1 / num2; 
        }
        function mul() {
            return  num1 * num2;  
        }

        function del() {
            tempValuesInput = tempValuesInput.substring(0, tempValuesInput.length - 1);
            userInputSelector.textContent = tempValuesInput;

        }

        function clr() {
            operationSelector.textContent = ``;
            userInputSelector.textContent = ``;
            tempValuesInput = `` ;
            num1 = ``;
            num2 = ``;
            operand = ``;
            result = ``;
            tempValuesInput = `` ;
            firstTime = true;
            isEqlPressed = false;

        }
