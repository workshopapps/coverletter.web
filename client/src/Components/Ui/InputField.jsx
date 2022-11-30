const InputField = (props) => {
	return (
		<div>
			<label
				htmlFor={props.htmlFor}
				className="text-[14px] text-grey400 font-semibold text-left"
			>
				{props.label}
			</label>
			<div className="relative">
				<input
					id={props.id}
					style={props.style}
					value={props.value}
					onChange={props.onChange}
					onBlur={props.onBlur}
					type={props.type}
					placeholder={props.placeholder}
					className={
						props.className +
						" w-[100%] mt-[4px] py-[12px] px-[16px] border border-stokeDark rounded-[8px] outline-none"
					}
				/>
				<p className="text-[12px] text-errorMain mt-[8px]">{props.p}</p>
				<p className="absolute top-5 right-5 cursor-pointer">
					<img
						src={props.src}
						alt=""
						onClick={props.passwordShown}
						className={!props.visible ? "opacity-50" : ""}
					/>
				</p>
			</div>
		</div>
	);
};

export default InputField;
