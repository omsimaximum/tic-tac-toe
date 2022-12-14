const Score = ({score, xPlaying}) => {
    return ( 
        <div className="score-board">
            <p className={`score x ${xPlaying && 'active'}`}>Score X: {score.xScore}</p>
            <p className={`score o ${!xPlaying && 'active'}`}>Score O: {score.oScore}</p>
        </div>
     );
}
 
export default Score;