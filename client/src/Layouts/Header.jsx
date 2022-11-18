import Logo from "../Assets/headerLogo.png";
import navLinkElements from "../Constants/navLinkElements";
import Hamburger from "../Assets/menu.svg";
import { Link, NavLink } from "react-router-dom";
import user from "../Assets/user.png";
const Header = () => {
	return (
		<nav className="flex items-center justify-between xxs:max-md:px-[28px] md:py-17 px-24">
			<Link to="/">
				<img src={Logo} alt="" />
			</Link>
			<ul className="xxs:max-lg:hidden lg:flex items-center justify-center">
				{navLinkElements.map((item) => {
					const { name, url } = item;
					return (
						<li
							key={name}
							className=" [&:not(:first-child)]:ml-[40px]"
						>
							<NavLink
								className="text-base font-semibold text-[#BABABA] hover:text-grey800 active:text-grey800"
								to={url}
							>
								{name}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<div className="cursor space-x-5">
				<Link
					to="/login"
					className="xxs:max-lg:hidden text-primaryMain leading-[24px] text-base flex justify-center items-center font-semibold"
				>
					Account <img className="ml-[9.94px]" src={user} alt="" />
				</Link>
				<button className="block lg:hidden ">
					<img src={Hamburger} alt="" />
				</button>
			</div>
		</nav>
	);
};

export default Header;
