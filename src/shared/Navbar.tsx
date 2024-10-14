import {Logo} from "../assets";
import {CustomNavLink} from "./CustomNavLink.tsx";
import {useState} from "react";
import {navLinks} from "../constants";
import {CartButton} from "./CartButton.tsx";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

    const [active, setActive] = useState<string>("Home");

    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    return (
        <header className={`w-full bg-WhiteBackground relative z-10`}>
            <div className={`flex justify-center items-center py-[20px] px-[20px] lg:px-[160px]`}>
                <div className={`w-full xl:max-w-[1600px]`}>
                    <nav className={`flex justify-between items-center navbar`}>

                        <div className={`flex items-center`}>
                            <NavLink to={'/'}>
                                <img src={Logo} alt="Organic Logo"
                                     className={`h-[30px] md:h-[40px] inline-block align-middle`}/>
                            </NavLink>

                            <ul className={`hidden sm:flex items-center pl-[20px] md:pl-[100px] list-none`}>
                                {
                                    navLinks.map((nav, index) => (
                                        <li key={nav.id}
                                            className={`${active === nav.title ? 'text-SecondaryColor' : 'text-PrimaryColor'}
                                             ${index === navLinks.length - 1 ? 'mr-0' : 'mr-4 md:mr-6'}`}
                                            onClick={() => setActive(nav.title)}>
                                            <CustomNavLink to={`/${nav.id === "home"? '': `${nav.id}`}`}>{nav.title}</CustomNavLink> {/*  ${nav.id}  */}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={'flex items-center flex-row-reverse gap-4 cursor-pointer'}>
                            <div className={`${isMenuActive? 'bg-SecondaryColor': 'bg-PrimaryColor'} block sm:hidden rounded-[11px] text-center p-4 ss:p-5 w-fit`}
                            onClick={() => setIsMenuActive(!isMenuActive)}>
                                <FontAwesomeIcon fontSize={14} color={'#ffffff'} icon={faBars} />
                            </div>
                            <CartButton />
                        </div>
                    </nav>

                    <div className={`${isMenuActive? 'flex': 'hidden'} sidebar z-10`} onClick={() => setIsMenuActive(!isMenuActive)}>
                        <ul className={`sm:hidden bg-LightGreenBackground absolute sidebar left-0 top-[100%] w-full gap-y-10 flex flex-col items-start py-10 pl-[20px] md:pl-[100px] list-none`}>
                            {
                                navLinks.map((nav, index) => (
                                    <li key={nav.id}
                                        className={`${active === nav.title ? 'text-SecondaryColor' : 'text-PrimaryColor'}
                                             ${index === navLinks.length - 1 ? 'mr-0' : 'mr-4 md:mr-6'}`}
                                        onClick={() => setActive(nav.title)}>
                                        <CustomNavLink to={`/`}>{nav.title}</CustomNavLink> {/*  ${nav.id}  */}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

