const Input = props  => {
    return ( 
        <input 
            name={props.name}
            type={props.type} 
            value={props.value}
            className={props.className}
            id={props.id}
            placeholder={props.placeholder}

        />
     );
}
 
export default Input;