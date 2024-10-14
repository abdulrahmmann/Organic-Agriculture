
type TestimonialProgressProps = {
    title: string,
    content: string
}

export const TestimonialProgress = ({title, content}: TestimonialProgressProps) => {
    return (
        <div className={`bg-[#F1F1F1] rounded-[50%] mx-auto w-[17rem] h-[17rem] border-4 border-solid border-SecondaryColor flex justify-center items-center`}>
            <div className={`text-center`}>
                    <h3 className={`text-[3.6rem] text-PrimaryColor font-Roboto font-black`}>
                        {title}
                    </h3>

                    <p className={`text-[1.4rem] text-PrimaryColor font-openSans font-semibold`}>
                        {content}
                    </p>
            </div>
        </div>
    );
};

