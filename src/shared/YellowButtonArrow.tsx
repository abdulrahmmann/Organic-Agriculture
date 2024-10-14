import {ReactNode} from "react";
import {ButtonArrow} from "../assets";

type PrimaryButtonArrowProps = {
    children: ReactNode
}
export const YellowButtonArrow = ({children}: PrimaryButtonArrowProps) => {
    return (
        <button className={`yellow-btn-arrow text-[1.4rem] font-Roboto font-bold
        text-PrimaryColor rounded-[12px] p-[22px] flex justify-center items-center gap-2 bg-YellowColor
        `}>
            {children}
            <img src={ButtonArrow} alt={'Button Arrow'} className={`w-[16px] h-[16px]`} />
        </button>
    );
};

