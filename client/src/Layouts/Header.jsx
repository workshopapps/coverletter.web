import { ReactComponent as TabLogo } from "../Assets/tablogo.svg";
import { ReactComponent as MobileLogo } from "../Assets/mobilelogo.svg";
import { ReactComponent as DesktopLogo } from "../Assets/desktoplogo.svg";
import { ReactComponent as DesktopMenu } from "../Assets/desktopmenu.svg";
import { ReactComponent as MobileMenu } from "../Assets/mobilemenu.svg";

const Header = () => {
    return ( 
        <div className="bg-textWhite">
            <div className="flex py-[20px] items-center justify-around">
                <div className="flex">
                    <div className="hidden md:block lg:hidden"><TabLogo/></div>
                    <div className="md:hidden"><MobileLogo/></div>
                    <div className="hidden lg:block"><DesktopLogo/></div>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex gap-[40px] font-bold text-base leading-[24px] text-textHeader">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="hidden md:flex gap-6">
                        <button className="py-[12px]  px-[32px] bg-textWhite border border-primaryMain rounded-[8px] text-primaryMain text-base">Sign in</button>
                        <button className="py-[12px] px-[32px] bg-primaryMain border border-primaryMain rounded-[8px] text-textWhite text-base">Register</button>
                    </div>
                    <div className="lg:hidden">
                        <div className="hidden md:block">
                            <DesktopMenu />
                        </div>
                        <div className="md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;