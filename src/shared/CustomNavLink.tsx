import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

type CustomNavLinkProps = {
    to: string,
    children: ReactNode,
}

export const CustomNavLink = ({to, children,}: CustomNavLinkProps) => {
    return (
        <NavLink to={to} className={`font-Roboto text-[1.2rem] sm:text-[1.4rem]  font-medium -tracking-tighter transition-colors hover:text-SecondaryColor`}>
            {children}
        </NavLink>
    );
};

