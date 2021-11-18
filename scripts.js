

    const operationSelector = document.querySelector(".operation");
    const userInputSelector = document.querySelector(`.userInput`);

    let tempValuesInput = `` ;
    // let inputsArray = [];
    let num1 ;
    let num2 ;
    let operand = ``;
    let result = 0 ;

    let firstTime = true;

    let isEqlPressed = false;
    
//From this point i'll add all the  btns

    const btnCLR = document.querySelector(`.btnCLR`);
    btnCLR.addEventListener("click" , clr );

    const btnDEL = document.querySelector(`.btnDEL`);
    btnDEL.addEventListener("click" , del );

    
        const btn1 = document.querySelector(`.btn1`);
        btn1.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`1`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn2 = document.querySelector(`.btn2`);
        btn2.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`2`);
            userInputSelector.textContent = tempValuesInput;
        
                });

        const btn3 = document.querySelector(`.btn3`);
        btn3.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`3`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn4 = document.querySelector(`.btn4`);
        btn4.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`4`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn5 = document.querySelector(`.btn5`);
        btn5.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`5`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn6 = document.querySelector(`.btn6`);
        btn6.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`6`);
            userInputSelector.textContent = tempValuesInput;
        
                });

        const btn7 = document.querySelector(`.btn7`);
        btn7.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`7`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn8 = document.querySelector(`.btn8`);
        btn8.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`8`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn9 = document.querySelector(`.btn9`);
        btn9.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`9`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btn0 = document.querySelector(`.btn0`);
        btn0.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`0`);
            userInputSelector.textContent = tempValuesInput;
        
                });
        const btnDOT = document.querySelector(`.btnDOT`);
        btnDOT.addEventListener("click" , () => {
            tempValuesInput = tempValuesInput.concat(`.`);
            userInputSelector.textContent = tempValuesInput;
        
                });



        const btnADD = document.querySelector(`.btnADD`);
        btnADD.addEventListener("click" , () => {

            if(firstTime){
            operand = `+`;
            }
            conditionsForOperations();

            operand = `+`;

                });          


        const btnMUL = document.querySelector(`.btnMUL`);
        btnMUL.addEventListener("click" , () => {
            if(firstTime){
            operand = `*`;
            }
    
            conditionsForOperations();
            operand = `*`;

                });
        const btnDIV = document.querySelector(`.btnDIV`);
        btnDIV.addEventListener("click" , () => {
            if(firstTime){
            operand = `/`;
            }
    
            conditionsForOperations();
            operand = `/`;

        
                });
        
        
        const btnSUB = document.querySelector(`.btnSUB`);
        btnSUB.addEventListener("click" , () => {
            if(firstTime){
            operand = `-`;
            }
    
            conditionsForOperations();
            operand = `-`;

                });

        const btnEQL = document.querySelector(`.btnEQL`);
        btnEQL.addEventListener("click" , () => {
            
            isEqlPressed = true;
            conditionsForOperations();
            operand = ``;


                });




        function conditionsForOperations() {

            // if no value is entred ... it will not do anything
            if(tempValuesInput == `` ) {
                console.log(`empty tempValuesInput`)
                return 0 ;
            }

            //if the last elemnt in the is number, or not empty , it will enter and add the numbers , at the end 
                                                    // it will add the operand 
            // typeof inputsArray.at(-1) == `number` || 
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
            
            // if (num2 == '') {
            //     return 0;
            // }

                    switch(operand) {
                        case `+`:
                            console.log(`add`);
                          result = add();
                          console.log(`${result}`)
                          break;
                        case `-`:
                            console.log(`sub`);
                          result = sub();
                          break;
                        case `*`:
                            console.log(`Mul`);
                            result = mul();
                          break;
                        case `/`:
                            console.log(`div`);
                          result = div();
                          break;

                        //   case `=`:
                        //     console.log(`eql`);
                        //     console.log(`result = ${result} num1 = ${num1} num2 = ${num2} ${operand}`);
                        //     num1 = result;
                        //     operationSelector.textContent = `${num1}`;
                        //     userInputSelector.textContent = ``;
                        //     return 0
                        //   break;
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



                // tempValuesInput = tempValuesInput.concat(`+`);
                // userInputSelector.textContent = ``;

                // for (i = 0; i < inputsArray.length; i++){
                //     operationDisplayValues = operationDisplayValues.concat(` ${inputsArray[i]}`);
                // }

                // operationSelector.textContent = operationDisplayValues;
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

        }




//here the btns funtions finishes.

// a variable will hold the numbers as string and every num btn clicked will add to the string then change it to float
// will create an array , this array will hold the entered values IF AND ONLY IF one of the operations btns are clicked
//      * The array would be like : array = ["1.5" , " + " , "10" , "-" , "20"] 
//      * MAKE SURE THE USER CAN'T ENTER TWO OPERATIONS TOGETHER , to do that check if the last elemnt is num or OP
//      * result = 0  num = 0  op = ""  = 
//      * enter loop  for each elemnt , check if the elemnt is a number. num = elemnt CONTINUE to restart the loop
//      * if you want you can check online how to check if the datatype are eql
//      * the second elemnt will be OP , result = result OP num ... repeat = 
//                      === for example  result = 1.5 + 10  = 
//      *
// once the EQL operation is clicked the userInput will be removed and the result will be displayed there = 


