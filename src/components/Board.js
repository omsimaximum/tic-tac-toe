import Box from './Box';

const Board = ({board,onClick}) => {
    return ( 
        <div className="board">
            {board.map((item,idx) => (
                <Box value={item} key={idx} onClick={() => item === null && onClick(idx)} />
            ))}
        </div>
     );
}
 
export default Board;