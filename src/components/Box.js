const Box = ({value , onClick}) => {
    const style = value === 'X' ? 'btn x' : 'btn o';
    return ( 
        <button className={style} onClick={onClick}>{value}</button>
     );
}
 
export default Box;