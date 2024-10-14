
type ChooseFeatureItemProps = {
    icon: string,
    title: string,
    description: string
}

export const ChooseFeatureItem = (props: ChooseFeatureItemProps) => {
    return (
        <div className={`bg-white rounded-[16px] px-[2.4rem] py-[3.6rem] text-center`}>
            <div className={`w-[70px] h-[70px] rounded-[16px] bg-WhiteBackground mb-[1.4rem] flex justify-center items-center mx-auto`}>
                <img src={props.icon} alt="Choose Feature Item Icon" className={`w-[30px] h-[30px]`} />
            </div>

            <div>
                <h3 className={`text-[1.6rem] text-PrimaryColor font-Roboto font-semibold mb-[1.2rem]`}>
                    {props.title}
                </h3>

                <p className={`text-[1.2rem] text-ParagraphColor font-openSans font-norma leading-[1.6]`}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

