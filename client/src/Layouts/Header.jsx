import Logo from "../Assets/headerLogo.png";
import navLinkElements from "../Constants/navLinkElements";
import Button from "../Components/Ui/Button";
import Hamburger from "../Assets/menu.svg";
const Header = () => {
	return (
		<div className="flex items-center justify-between py-5 px-5 md:px-10 xl:px-15">
			<img src={Logo} alt="" />
			<ul className="space-x-6 hidden lg:block">
				{navLinkElements.map((item) => (
					<li key={item.name} className="inline-block">
						{item.name}
					</li>
				))}
			</ul>
			<div className="space-x-5 flex">
				<Button className="btn btnShort btnSecondary hidden md:block">
					Sign in
				</Button>
				<Button className="btn btnShort btnPrimary hidden md:block">
					Register
				</Button>
				<button>
					<img src={Hamburger} alt="" className="md:hidden" />
				</button>
			</div>
		</div>
	);
};

export default Header;
