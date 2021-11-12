const operationSelector = document.querySelector(`.operation`);
const userInputSelector = document.querySelector(`.userInput`);

    

//From this point i'll add all the  btns

const btnCLR = document.querySelector(`.btnCLR`);
    
    btnCLR.addEventListener("click" , () => {
        operationSelector.textContent(` d`);
        userInputSelector.textContent(` d`);

      });



//here the btns funtions finishes.