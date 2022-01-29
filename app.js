const STONE = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const tie = 0;
const win = 1;
const lost = 2;

const stoneBtn = document.getElementById("stone");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("effect");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

resultText.innerHTML = "Elige una Opcion para empezar" +  "</br>" + "</br>" + "</br>";

stoneBtn.addEventListener("click", ()=>
{
    play(STONE);
});

paperBtn.addEventListener("click", ()=>
{
    play(PAPER);
});

scissorsBtn.addEventListener("click", ()=>
{
    play(SCISSORS);
});

function play(userOption)
{
    userImg.src = "/assets/"+userOption+".svg";

    resultText.innerHTML = "Pensando!" +  "</br>" + "</br>" + "</br>";

    const interval = setInterval(function()
    {
        const machineOption = calcMachineOption();
        machineImg.src = "/assets/"+machineOption+".svg";
        
    }, 500);

    setTimeout(function()
    {
        clearInterval(interval);
        const machineOption = calcMachineOption();
        const result = calResult(userOption, machineOption);

    
    machineImg.src = "/assets/"+machineOption+".svg";

    switch(result)
    {
        case tie:
            resultText.innerHTML = "You have Tied" + "</br>" + "</br>" + " Has empatado";
            break;
        
        case win:
            resultText.innerHTML = "You Win" + "</br>" + "</br>" + " Has ¡Ganado!";
            break;

        case lost:
            resultText.innerHTML = "You Lost! " + "</br>" + "</br>" + " Has Perdido!";
            break;
    }
    }, 3000);

    
}

function calResult(userOption, machineOption)
{
    if(userOption === machineOption)
    {
        return tie;

    }else if(userOption === STONE)
    {
        if(machineOption === PAPER) return lost;
        if(machineOption === SCISSORS) return win;
        
    }else if (userOption === PAPER)
    {
        if(machineOption === SCISSORS) return lost;
        if(machineOption === STONE) return win;

    }else if(userOption === SCISSORS)
    {
        if(machineOption === STONE) return lost;
        if(machineOption === PAPER) return win;

    }
}

function calcMachineOption()
{
    const number = Math.floor(Math.random() * 3);
    switch(number)
    {
        case 0:
            return STONE;
        
        case 1:
            return PAPER;

        case 2:
            return SCISSORS;
    }

}

