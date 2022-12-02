import { useEffect, useRef, useState } from "react";
import Logo from "../Assets/coverly.svg";
import Hamburger from "../Assets/menu.svg";
import { Link, useLocation } from "react-router-dom";
import Close from "../Assets/close-circle.svg";
import Button from "../Components/Ui/Button";
import navLinkElements from "../Constants/navLinkElements";
import historyElements from "../Constants/historyElements";
import { useGlobalContext } from "../context/context";
// import { ReactComponent as Avatar } from "../Assets/Avatar.svg";
import { toast } from "react-toastify";

const Header = () => {
	const { user } = useGlobalContext();
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleUserMenu, setToggleUserMenu] = useState(false);
	const location = useLocation();
	const ref = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setToggleUserMenu(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	/*
	 * Logout user
	 */

	const logout = async () => {
		try {
			localStorage.removeItem("user");
			toast.success("You have been logged out");
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (err) {
			console.log(err);
			toast.error("Something went wrong");
		}
	};

	const Large = () => {
		return (
			<ul className="space-x-12 hidden lg:block ">
				{navLinkElements.map((item) => (
					<Link
						key={item.name}
						to={item.url}
						className={`inline-block font-semibold text-grey400 hover:text-[#0652DD] ${
							location.pathname === item.url
								? "text-primaryMain font-bold"
								: ""
						}`}
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
					className="w-9 ml-auto cursor-pointer"
					onClick={() => setToggleMenu((prev) => (prev = false))}
				/>
				<ul className="flex flex-col gap-y-5 mb-9 items-start">
					{navLinkElements.map((item) => (
						<Link
							key={item.name}
							to={item.url}
							className="text-[18px] hover:text-[#0652DD]"
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
				{!user ? (
					<>
						<Link to="/signin">
							<Button
								className="btn btnShort btnSecondary block md:hidden w-full my-4"
								onClick={() =>
									setToggleMenu((prev) => (prev = false))
								}
							>
								Sign in
							</Button>
						</Link>

						<Link to="/register">
							<Button
								className="btn btnShort btnPrimary block md:hidden w-full"
								onClick={() =>
									setToggleMenu((prev) => (prev = false))
								}
							>
								Register
							</Button>
						</Link>
					</>
				) : (
					<>
						<Button
							// onClick={() => {
							// 	setToggleUserMenu((prev) => !prev);
							// 	setToggleMenu(false);
							// }}
							className="btn btnShort btnSecondary block md:hidden w-full my-4"
						>
							History
						</Button>
						{/* {toggleUserMenu && <UserMenu />} */}
					</>
				)}
			</aside>
		);
	};

	const UserMenu = () => {
		return (
			<aside className="w-[234px] h-[max-content] border border-searchbd bg-textWhite absolute top-[98px] right-16 max-[768px]:right-4 z-20 rounded-sm">
				<div className=" h-full flex flex-col gap-3">
					<ul className="flex items-center justify-center">
						{historyElements.map((item) => (
							<Link
								key={item.name}
								to={item.url}
								className=" text-base flex p-5 items-center gap-2 justify-center"
							>
								{item.icon}
								<p className="font-bold text-base">
									{item.name}
								</p>
							</Link>
						))}
					</ul>
					<hr className="border-[0.3px] border-searchbd" />
					<div>
						<Link
							to="/"
							className="text-center cursor-pointer p-5"
							onClick={logout}
						>
							<p className="font-bold text-base">Log Out</p>
						</Link>
					</div>
				</div>
			</aside>
		);
	};

	return (
		<header className="relative max-w-screen-2xl m-auto py-1 md:w-[87%] w-[89%] lw:w-[1250px] ">
			<Small />
			<div className="flex items-center justify-between py-5">
				<Link to="/">
					<img
						src={Logo}
						alt="Coverly"
						className="w-28 sm:w-36 tb:w-40"
					/>
				</Link>
				<Large />
				<div ref={ref} className="space-x-6 flex">
					{!user ? (
						<>
							<Link to="/signin">
								<Button className="btn btnShort btnSecondary hidden md:block">
									Sign in
								</Button>
							</Link>
							<Link to="register">
								<Button className="btn btnShort btnPrimary hidden md:block">
									Register
								</Button>
							</Link>
						</>
					) : (
						<>
							<Button
								// onClick={() =>
								// 	setToggleUserMenu((prev) => !prev)
								// }
								className="btn btnShort btnSecondary hidden md:block"
							>
								History
							</Button>
							<Link
								// to=""
								onClick={() =>
									setToggleUserMenu((prev) => !prev)
								}
							>
								{/* <Avatar className="w-12 h-12 hidden lg:block" /> */}

								<div className="rounded-full w-12 h-12 bg-[#CDDCF8] font-bold  text-[#0652DD] flex items-center justify-center object-fill">
									{user?.name[0].toUpperCase()}
								</div>
							</Link>
							{toggleUserMenu && <UserMenu />}
						</>
					)}
					<button>
						<img
							src={Hamburger}
							alt="Hamburger"
							className="block w-6 sm:w-8 tb:w-10 lg:hidden cursor-pointer"
							onClick={() =>
								setToggleMenu((prev) => (prev = true))
							}
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
