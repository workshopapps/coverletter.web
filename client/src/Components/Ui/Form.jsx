import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styler = (alertType) => {
	switch (alertType) {
		case "error":
			return { helper: "text-[#FF2635]", input: "border-[#FF2635]" };
		case "success":
			return { helper: "", input: "" };
		case "info":
			return { helper: "", input: "" };
		case "warning":
			return { helper: "", input: "" };
		default:
			return { helper: "", input: "" };
	}
};

const Label = (props) => {
	const { children, id } = props;
	return (
		<div className="pb-1">
			<label htmlFor={id} className="text-grey400 text-sm ">
				{children}
			</label>
		</div>
	);
};

const HelperText = (props) => {
	const { children, type } = props;
	return (
		<div className="p-1">
			<p className={`text-sm  ${styler(type).helper || "text-grey400"}`}>
				{" "}
				{children}
			</p>
		</div>
	);
};

const TextField = (props) => {
	const {
		value,
		onChange,
		labelText,
		icon,
		endIcon,
		helperText,
		alertType,
		placeholder,
		holderClassName,
		id,
		type,
		required,
	} = props;

	return (
		<div className={holderClassName}>
			<Label id={id}>{labelText}</Label>
			<div className="relative text-grey400">
				{icon && (
					<FontAwesomeIcon
						icon={icon}
						className="absolute top-0 left-0 p-4"
					/>
				)}
				<textarea
					rows={4}
					className={`p-3 ${endIcon && "pr-12"} ${
						icon && "pl-12"
					} w-full rounded-lg outline-none border-[#CAD0DD] focus:border-[#6D6D6D] border-[1px] ${
						styler(alertType).input
					}`}
					{...{ value, onChange, placeholder, type, required }}
				/>
				{endIcon && (
					<FontAwesomeIcon
						icon={["fas", "user"]}
						className="absolute top-0 right-0 p-4 text-grey400"
					/>
				)}
			</div>
			<HelperText type={alertType}>{helperText}</HelperText>
		</div>
	);
};

const Select = (props) => {
	const {
		value,
		onChange,
		labelText,
		icon,
		helperText,
		alertType,
		placeholder,
		holderClassName,
		id,
		options,
	} = props;
	const [open, setOpen] = React.useState(false);
	const [height, setHeight] = React.useState("0px");

	const singleHeight = 40;

	const getHeight = (length) => {
		if (length === 0) {
			return singleHeight;
		} else if (length < 3) {
			return singleHeight * length;
		} else {
			return 3 * singleHeight;
		}
	};

	const handleClick = () => {
		setOpen(!open);
		setHeight(open ? "0px" : `${getHeight(options.length * 2 + 1)}px`);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setOpen(false);
			setHeight("0px");
		}, 100);
	};

	const keyDown = (event) => {
		if (event.key === "Enter") {
			handleClick();
		}
	};

	return (
		<div className={holderClassName}>
			<Label id={id}>{labelText}</Label>
			<div className="relative text-grey400">
				{icon && (
					<FontAwesomeIcon
						icon={icon}
						className="absolute top-0 left-0 p-4"
					/>
				)}
				<div
					className={`p-3  ${
						icon && "pl-12"
					} w-full rounded-lg outline-none border-[#CAD0DD] focus:border-[#6D6D6D] border-[1px] ${
						!value && "text-textPlacecholder"
					} ${styler(alertType).input}`}
					tabIndex="0"
					onClick={handleClick}
					onKeyDown={keyDown}
					onBlur={handleBlur}
				>
					{value}
					{!value && (placeholder || "Select...")}
				</div>
				<FontAwesomeIcon
					icon={["fas", "chevron-down"]}
					className="absolute top-0 right-0 p-4 text-grey400"
					flip={open && "vertical"}
					onClick={handleClick}
				/>
			</div>
			<div
				style={{ maxHeight: height }}
				className="transition-all duration-200 border-[#6D6D6D] overflow-y-scroll rounded-lg"
			>
				<ul className="h-full bg-[#fff]  border-[#6D6D6D] border-[1px] rounded-lg ">
					{options.map((item, index) => (
						<li
							key={index}
							onClick={() =>
								onChange &&
								onChange({ target: { value: item } })
							}
							className="w-full text-grey400 px-5 py-2 hover:bg-[#DCDCDC] cursor-pointer"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
			<HelperText type={alertType}>{helperText}</HelperText>
		</div>
	);
};

const Input = (props) => {
	const {
		value,
		onChange,
		labelText,
		icon,
		endIcon,
		helperText,
		alertType,
		placeholder,
		holderClassName,
		id,
		type,
		required,
	} = props;

	return (
		<div className={holderClassName}>
			<Label id={id}>{labelText}</Label>
			<div className="relative text-grey400">
				<FontAwesomeIcon
					icon={icon || ["fas", "user"]}
					className="absolute top-0 left-0 p-4 "
				/>
				<input
					className={`p-3  ${endIcon && "pr-12"} ${
						icon && "pl-12"
					} w-full rounded-lg outline-none border-[#CAD0DD] focus:border-[#6D6D6D] border-[1px] ${
						styler(alertType).input
					}`}
					{...{ value, onChange, placeholder, type, required }}
				/>
				{endIcon && (
					<FontAwesomeIcon
						icon={["fas", "user"]}
						className="absolute top-0 right-0 p-4 text-grey400"
					/>
				)}
			</div>
			<HelperText type={alertType}>{helperText}</HelperText>
		</div>
	);
};

export default Input;
export { TextField, Select };
