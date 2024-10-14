
type InfoItemProps = {
    title: string,
    subTitle: string,
    image: string
}

export const HomeAboutInfoItem = ({title, subTitle, image}: InfoItemProps) => {
    return (
        <div className={`flex flex-1 justify-center items-start gap-4 mb-[2.4rem]`}>
                <img src={image} alt="about info item image" className={`w-[6rem] h-[6rem]`} />

            <div>
                <h3 className={`font-Roboto text-[1.6rem] text-PrimaryColor font-bold mb-2`}>
                    {title}
                </h3>

                <p className={`font-openSans text-[1.2rem] text-ParagraphColor font-normal leading-[1.6]`}>
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

