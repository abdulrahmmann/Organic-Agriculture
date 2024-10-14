import {CSSProperties, MouseEventHandler, ReactNode} from "react";

type SimpleButtonProps = {
    children: ReactNode,
    style?: CSSProperties,
    mouseEnter?: MouseEventHandler<HTMLButtonElement>,
    mouseLeave?: MouseEventHandler<HTMLButtonElement>,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string
}
export const SimpleButton = (props: SimpleButtonProps) => {
    return (
        <button className={`rounded-[11px] px-[10rem] sm:px-[2.4rem] py-[2rem] text-[1.4rem] font-Roboto font-semibold text-center ${props.className}`}
                style={props.style} onMouseEnter={() => props.mouseEnter} onMouseLeave={() => props.mouseLeave}
        >
            {props.children}
        </button>
    );
};

/*
*Style Props --> Text-Color - Bg-Color
*/