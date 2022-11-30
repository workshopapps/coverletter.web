const Label = props => {
    return ( 
        <label className={props.className}>{props.children}</label>
     );
}
 
export default Label;