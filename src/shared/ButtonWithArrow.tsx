import {CSSProperties, MouseEventHandler, ReactNode} from "react";
import {ButtonArrow} from "../assets";

type ButtonWithArrowProps = {
    children: ReactNode,
    style?: CSSProperties,
    mouseEnter?: MouseEventHandler<HTMLButtonElement>,
    mouseLeave?: MouseEventHandler<HTMLButtonElement>,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string
}
export const ButtonWithArrow = (props: ButtonWithArrowProps) => {
    return (
        <button className={`rounded-[11px] px-[100px] sm:px-[24px] py-[20px] text-[1.4rem] font-Roboto font-semibold text-center ${props.className}`}
            style={props.style} onMouseEnter={() => props.mouseEnter} onMouseLeave={() => props.mouseLeave}
        >
            {props.children}
            <img src={ButtonArrow} alt={'Button Arrow'} className={`inline-block ml-4 w-[16px] h-[16px]`} />
        </button>
    );
};

/*
*Style Props --> Text-Color - Bg-Color
*/