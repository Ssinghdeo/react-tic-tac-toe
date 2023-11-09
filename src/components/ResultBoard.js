import React from 'react';
import './ResultBoard.css';

/*Define the ResultBoard component as a functional component 
that displays the result of the game*/
export const ResultBoard = ({ winner ,clickCount}) => {
  let winnerMessage = null;

/*winnerMessage' based on the 'winner' prop (either "X" or "O")
  if winner equal to X then display this mess X is winner*/
  if (winner === 'X') {
    winnerMessage = (
      <div>
        <p className="winner-message winner-x">X is the winner</p>
      </div>
    )

    //else part winner equal to O then display this mess O is winner
  } else if (winner === 'O') {
    winnerMessage = (
      <div>
        <p className="winner-message winner-o">O is the winner</p>
      </div>
    
    );
  }

  /*If there is no winner (null) and the number of (clickCount) is 
  equal to 9 draw message will print*/
  else if(winner === null &&  clickCount === 9){
    winnerMessage = (
      <div>
        <p className="winner-message draw"> Game is Draw</p>
      </div>
    );
  }

  return (
    <div>
   {/* printing the winner message */}
      {winnerMessage}
    </div>
    
  );
};