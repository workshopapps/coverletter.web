const Button = (props) => {
	return (
		<button
			className={`${props.className} disabled:bg-disabledDisabled`}
			type={props.type || "button"}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			<div className="flex items-center justify-center space-x-2">
				<p>{props.children}</p>
				{props.icon}
			</div>
		</button>
	);
};

export default Button;
