const Message = ({winner}) => {
    const msg = winner === 'X' ? 'Player X won' : winner === 'O' ? 'Player O won' : '';
    const style = winner === 'X' ? 'x' : winner === 'O' ? 'o' : '';
    return ( 
        <div className={`msg ${style}`}>
            <p>{msg}</p>
        </div>
     );
}
 
export default Message;