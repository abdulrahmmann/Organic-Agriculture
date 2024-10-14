import {GreenCircleIcon} from "../../../assets";

type ChoseItemProps = {
    title: string,
    description: string
}
export const ChoseItem = (props: ChoseItemProps) => {
    return (
        <div className={`my-[2rem]`}>
            <div className={`rounded-[30px] bg-[#ececec] px-[3.6rem] py-[1.8rem] w-fit mt-[1.2rem]`}>
                <div className={`-ml-6`}>
                    <div className={`flex justify-center items-center gap-4 text-start`}>
                        <img src={GreenCircleIcon} alt={'Green Circle Icon'} className={`w-[15px] h-[15px]`}/>
                        <h3 className={`text-[1.2rem] text-PrimaryColor font-semibold font-Roboto`}>
                            {props.title}
                        </h3>
                    </div>
                </div>
            </div>

            <div className={`text-[1.2rem] text-ParagraphColor font-normal font-openSans mt-[1.2rem] leading-[1.8] md:ml-[3rem]`}>
                {props.description}
            </div>
        </div>
    );
};

