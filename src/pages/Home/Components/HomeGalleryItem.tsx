import {CSSProperties} from "react";

type GalleryProps = {
    style: CSSProperties
    buttonTitle: string
}

export const HomeGalleryItem = ({style, buttonTitle}: GalleryProps) => {
    return (
        <div style={style} className={`object-cover flex justify-center items-center min-h-[22rem] sm:min-h-[38rem] rounded-[11px]`}>
            <button
                className={`text-[2rem] bg-white hover:bg-YellowColor transition-colors text-PrimaryColor font-Roboto font-medium text-center px-[60px] py-[20px] rounded-[20px]`}>
                {buttonTitle}
            </button>
        </div>
    );
};