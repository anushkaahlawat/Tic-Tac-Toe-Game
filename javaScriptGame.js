
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  // which player play first playerX or playerO \\ O = ooo 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [3,4,5],                            // winning conditions.
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetGame = () => {
    enableBoxes ();                                                  // link of enable box krna wala code ki.
    msgContainer.classList.add("hide");
};



  boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO) {                          // playerO
            box.innerText = "O";
            turnO = false;
        } else {                            // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner () ;                                      // link of check winner code.
    });
  });  

        const disableBoxes = () => {
            for(let box of boxes) {                 //for ki game win honake baad continue na ho.
                box.disabled = true;
            }
        };

        const enableBoxes = () => {
            for(let box of boxes) {                 //jab game dobara shuru ho to boxes enable ho jaye..
                box.disabled = false;
                box.innerText = "";

            }
        };


        const showWinner = (Winner) => {
            msg.innerText = `congratulations , Winner is ${Winner}`;            //code of show winner. 
            msgContainer.classList.remove("hide");
            disableBoxes();                                                // link of disable const box function.

        };

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;   
        let pos2Val = boxes[pattern[1]].innerText;               // winner kon ha usko check krna ka liya code.
        let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner!");

                showWinner (pos1Val) ;                               // winner ko aur new game ko dikhane ka liya.
             
            }
        }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);