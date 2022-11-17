const Button = (props) => {
	return (
		<button
			className={`${props.className}`}
			type={props.type || "button"}
			onClick={props.onClick}
		>
			<div className="flex items-center justify-center space-x-2">
				<p>{props.children}</p>
				{props.icon}
			</div>
		</button>
	);
};

export default Button;
