import {Rating} from "../../../assets";

type TestimonialSlideProps = {
    name: string,
    content: string,
    job: string,
    rate: number,
    image: string
}

export const TestimonialSingleSlide = ({name, content, job, rate, image}: TestimonialSlideProps) => {
    return (
            <div className={`flex flex-col justify-center items-center max-w-[600px] mr-auto ml-auto`}>
                <div className={`mb-5`}>
                    <img src={image} alt="Testimonial Client Image" className={`rounded-full w-[80px] h-[80px] `}/>
                </div>

                <img src={Rating} alt="rate image" className={`${rate} mb-8`}/>

                <p className={`text-[1.2rem] font-normal font-openSans text-ParagraphColor mb-6 text-center leading-[1.6]`}>
                    {content}
                </p>

                <h3 className={`text-[2rem] font-semibold font-Roboto text-PrimaryColo text-center mb-2`}>
                    {name}
                </h3>

                <p className={`text-[1.2rem] font-normal font-openSans text-ParagraphColor text-center`}>
                    {job}
                </p>
            </div>
    );
};