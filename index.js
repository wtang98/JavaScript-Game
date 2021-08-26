    const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if(userInput=== 'rock' || userInput=== 'paper'|| userInput==='scissors'){
        return userInput;
        }else {
        console.log("error");
        }
    };
    const getComputerChoice = () => {
        const choice = Math.floor(Math.random()*3);
        if(choice === 0){
        return 'rock';
        }else if (choice === 1){
        return 'paper';
        }else{
        return 'scissors';
        }
    };
    const determineWinner = (userChoice, computerChoice) =>{
        if(userChoice === computerChoice){
        return 'game was a tie'
        }
        if(userChoice ==='rock'){
        if(computerChoice === 'paper'){
            return 'computer wins'
        }
        else {
            return 'user wins'
            }
        }
        if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer wins'
        }else {
            return 'user wins'
        }
        }
        if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer wins'
        }else {
            return 'user wins'
        }
        }
    };
    const playGame= ()=> {
        const userChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice();
        console.log('you threw'+ userChoice);
        console.log('computer threw' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    };