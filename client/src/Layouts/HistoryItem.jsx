import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Options } from "../Assets/options.svg";
import { ReactComponent as Download } from "../Assets/download.svg";
import { ReactComponent as Delete } from "../Assets/delete.svg";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../Components/Ui/Modal";
import Button from "../Components/Ui/Button";
import { ReactComponent as PdfIcon } from "../Assets/PdfIcon.svg";
import { ReactComponent as Check } from "../Assets/Check.svg";
import { MdDelete } from "react-icons/md";
import bgImage from "../Assets/historybg.png";

const HistoryItem = (props) => {
	const [options, setOptions] = useState(false);
	const { user, setCoverLetter, setUserData } = useGlobalContext();
	const { deleteCoverLetter } = props;

	const ref = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOptions(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	const navigate = useNavigate();

	const handleHItemClick = (e) => {
		setCoverLetter(props.item);
		setUserData({ ...user, ...(props.item || {}) });
		setTimeout(() => {
			navigate("/preview");
		}, 200);
	};

	return (
		<div id={props.hid} className="m-auto w-full ">
			<div className="flex justify-between items-center bg-white px-5 py-3  rounded-lg  relative border-l-[15px] md:border-l-[30px] border-solid border-[#ACC5F4]">
				<div className="flex items-center gap-4">
					<PdfIcon className="w-10 md:w-16" />
					<div className="flex flex-col">
						<h3 className="text-lg font-bold mb-2 capitalize">
							{props.item.company_name}
						</h3>
					</div>
				</div>

				<p className="text-xs hidden md:block">
					Created {props.item.date}
				</p>
				<div className="grid grid-cols-2 gap-2">
					<Button
						className={
							"btn btnPrimary p-0 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
						}
						children={"View"}
						type={"button"}
						disabled={false}
						onClick={handleHItemClick}
					></Button>
					<Button
						className={
							"btn btnPrimary bg-errorMain  text-xl disabled:opacity-50 disabled:cursor-not-allowed"
						}
						children={<MdDelete></MdDelete>}
						type={"button"}
						disabled={false}
						onClick={() => {
							deleteCoverLetter(props.hid);
						}}
					></Button>
				</div>
			</div>
		</div>
	);
};

export default HistoryItem;
