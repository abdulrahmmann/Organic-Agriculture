import {CSSProperties} from "react";

type HeadingTitleProps = {
    title: string,
    description: string,
    styleTitle?: CSSProperties,
    styleDescription?: CSSProperties,
}
export const MainHeadingTitle = (props: HeadingTitleProps) => {
    return (
        <div>
            <h3 style={props.styleTitle} className={`text-SecondaryColor text-[3.2rem] font-yellowtail font-medium mb-[0.8rem]`}>
                {props.title}
            </h3>
            <p style={props.styleDescription} className={`text-PrimaryColor text-[2.8rem] font-Roboto font-bold mb-[1.6rem] leading-[1.2] sm:max-w-[400px]`}>
                {props.description}
            </p>
        </div>
    );
};

