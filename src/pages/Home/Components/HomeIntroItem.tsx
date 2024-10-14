import {CSSProperties} from "react";

type IntroItemProps = {
    title: string,
    subTitle: string,
    style?: CSSProperties
    titleStyle?: CSSProperties,
    subTitleStyle?: CSSProperties
}
export const HomeIntroItem = (props: IntroItemProps) => {
    return (
        <div style={props.style} className={`rounded-[16px] p-[3.2rem] sm:p-[5.2rem] bg-DarkGrey`}>
            <div className={`mt-auto mb-auto text-center lg:text-start`}>
                <h3 style={props.titleStyle} className={`text-[2rem] sm:text-[2.4rem] font-yellowtail font-semibold pb-[1rem]`}>
                    {props.title}
                </h3>
                <p style={props.subTitleStyle} className={`text-[2.4rem] sm:text-[3rem] font-Roboto font-extrabold`}>
                    {props.subTitle}
                </p>
            </div>
        </div>
    );
};

