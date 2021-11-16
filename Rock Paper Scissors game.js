const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
 
     if (userInput==='rock'||userInput==='paper'||userInput==='scissors' ||userInput==='bomb' ){
 return userInput;
     }
    
 
 else {
   console.log('Error!');
 }}
 
 const getCompChoice = () => {
 randomNumber = Math.floor(Math.random()*3);
 
 switch (randomNumber) {
 
   case 0: return 'rock';
   break;
   case 1 : return 'paper';
   break;
   case 2: return 'scissors'
   break;
 }
 
 }
 
 const deterWinner = (getUserChoice,getCompChoice) => {
 
   if (getUserChoice===getCompChoice){
       return 'Tie';
 
   } 
   if (getUserChoice === 'bomb'){
     return 'You have destroyed the computer for good!'
   }
 
 if (getUserChoice==='rock'){
   if(getCompChoice==='paper'){
     return 'Comp Won!'
   }
   
 else {return 'You won!'}
 }
 
     if (getUserChoice==='paper'){
       if(getCompChoice==='scissors')
       return ' Comp Won!'
     }else { return 'You won!'}
     
 
 if (getUserChoice==='scissors'){
   if(fetCompChoice==='rock'){return 'Comp Won!'}
   
 }else {return 'You Won!'}
 
 }
 
 const playGame= (pick)=>{
   
   const userChoice=getUserChoice(pick);
   const compChoice=getCompChoice();
 if (pick === 'bomb'){ }else{
   console.log('You threw: '+userChoice);
   console.log('The Computer Threw: '+compChoice);
   
 }
 console.log(deterWinner(userChoice, compChoice));
 }
 
 playGame('paper');
 