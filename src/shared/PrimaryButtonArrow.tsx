import {CSSProperties, MouseEventHandler, ReactNode} from "react";
import {ButtonArrow} from "../assets";

type PrimaryButtonArrowProps = {
    children: ReactNode,
    style?: CSSProperties,
    mouseEnter?: MouseEventHandler,
    mouseLeave?: MouseEventHandler,
}
export const PrimaryArrowButton = ({children, style, mouseEnter, mouseLeave}: PrimaryButtonArrowProps) => {
    return (
        <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={style} className={`primary-btn-arrow text-[1.4rem] font-Roboto font-bold
        text-white rounded-[12px] p-[22px] flex justify-center items-center gap-4 bg-PrimaryColor
        `}>
            {children}
            <img src={ButtonArrow} alt={'Button Arrow'} className={`w-[16px] h-[16px]`} />
        </button>
    );
};

