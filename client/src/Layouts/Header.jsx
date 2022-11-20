import Logo from "../Assets/headerLogo.png";
import navLinkElements from "../Constants/navLinkElements";
import Button from "../Components/Ui/Button";
import Hamburger from "../Assets/menu.svg";
import { Link } from "react-router-dom";
import Close from "../Assets/close.svg";
import { useState } from "react";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const Large = () => {
		return (
			<ul className="space-x-6 hidden lg:block">
				{navLinkElements.map((item) => (
					<Link
						key={item.name}
						to={item.url}
						className="inline-block"
					>
						{item.name}
					</Link>
				))}
			</ul>
		);
	};

	const Small = () => {
		return (
			<aside
				className={`border-r border-primaryMain fixed bg-white bottom-0 top-0 w-3/4 sm:w-1/2 lg:hidden py-4 px-6 z-50 ${
					toggleMenu ? "left-0" : "-left-full"
				}`}
			>
				<img
					src={Close}
					alt="close"
					className="w-12 ml-auto cursor-pointer"
					onClick={() => setToggleMenu((prev) => (prev = false))}
				/>
				<ul className="flex flex-col text-textHeader gap-y-4 items-start">
					{navLinkElements.map((item) => (
						<Link
							key={item.name}
							to={item.url}
							className="text-2xl hover:opacity-100 opacity-80"
							onClick={() =>
								setToggleMenu(() =>
									setToggleMenu((prev) => (prev = false))
								)
							}
						>
							{item.name}
						</Link>
					))}
				</ul>
				<Button
					className="btn btnShort btnSecondary block md:hidden w-full my-4"
					onClick={() => setToggleMenu((prev) => (prev = false))}
				>
					Sign in
				</Button>
				<Button
					className="btn btnShort btnPrimary block md:hidden w-full"
					onClick={() => setToggleMenu((prev) => (prev = false))}
				>
					Register
				</Button>
			</aside>
		);
	};

	return (
		<>
			<Small />
			<div className="flex items-center justify-between py-5 px-5 md:px-10 xl:px-15">
				<Link to="/">
					<img src={Logo} alt="Aplicar" />
				</Link>
				<Large />
				<div className="space-x-5 flex">
					<Button className="btn btnShort btnSecondary hidden md:block">
						Sign in
					</Button>
					<Button className="btn btnShort btnPrimary hidden md:block">
						Register
					</Button>
					<button>
						<img
							src={Hamburger}
							alt="Hamburger"
							className="block lg:hidden cursor-pointer"
							onClick={() =>
								setToggleMenu((prev) => (prev = true))
							}
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
