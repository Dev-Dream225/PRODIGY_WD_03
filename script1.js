let playText= document.getElementById("playText");
let restartbtn= document.getElementById("restartbtn");
let box = Array.from(document.getElementsByClassName("box"));

 let winnercolor = getComputedStyle(document.body).getPropertyValue("--winnercolor")

 const X_text = "X"
 const O_text = "O"


 let currentPlayer = X_text
 let spaces = Array(9).fill(null)

const start = ()=>{
    box.forEach(box => box.addEventListener("click",boxclick));
}

function boxclick(e){
    const  id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playText.innerHTML = `${currentPlayer} Won`
            let winnercolor = playerHasWon()

            winnercolor.map(box =>boxs[box].style.backgroundColor = winnercolor)
            return 
        }
        currentPlayer = currentPlayer == X_text ? O_text : X_text
    }
}

function playerHasWon(){
    for(const condition of winnerComb){
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a,b,c]
        }
    }
    return false
}

const winnerComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],

]

restartbtn.addEventListener("click", RESTART)

function RESTART(){
    spaces.fill(null)
    box.forEach(box =>{
        box.innerText = ""
        box.style.backgroundColor=""

    })

    playText.innerHTML = "Tic Tac Toe"

    currentPlayer = X_text
}

start()