import Board from "./components/Board";
import Score from "./components/Score";
import Reset from "./components/Reset";
import Message from "./components/Message";
import {useState} from 'react';
function App() {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying,setXPlaying] = useState(true);
  const [score, setScore] = useState({xScore:0, oScore:0});
  const [winner,setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const combinationList = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]

  const handleClick = (idx) => {
    const updatedBoard = board.map((item,index) => {
      if(index === idx){
        return xPlaying ? 'X' : 'O';
      }
      return item;
    })
    let winner = determineWinner(updatedBoard);
    if(winner){
      if(winner === 'X'){
        let {xScore} = score;
        xScore +=1;
        setScore({...score, xScore})
        setWinner('X');
      }
      else {
        let {oScore} = score;
        oScore +=1;
        setScore({...score, oScore})
        setWinner('O')
      }
    }
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const determineWinner = (board) => {
    for(let i=0; i<combinationList.length; i++){
      console.log(combinationList[i]);
      const [x,y,z] = combinationList[i];
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXPlaying(true);
    setWinner('');
  }


  return (
    <div className="App">
      <h1 className="title">TIC TAC TOE</h1>
      <Score score={score} xPlaying={xPlaying} />
      <Message winner={winner} />
      <Board board={board} onClick={gameOver ? resetGame : handleClick}/>
      <Reset reset={resetGame}/>
    </div>
  );
}

export default App;
