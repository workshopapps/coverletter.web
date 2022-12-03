import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../context/context";

const Backdrop = () => {
	const { closeModal } = useGlobalContext();
	return (
		<div
			className="fixed w-full z-40 h-screen bg-overlay2 "
			onClick={closeModal}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<div
			className={`fixed z-50 flex items-center justify-center h-screen w-screen px-10  ${props.className}`}
		>
			<div>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const ModalLight = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default ModalLight;
