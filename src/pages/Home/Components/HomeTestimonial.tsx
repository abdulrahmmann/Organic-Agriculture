import {TestimonialProgress} from "./TestimonialProgress.tsx";
import {HomeTestimonialStatus} from "../../../constants";
import {TestimonialSlider} from "./TestimonialSlider";
import {MainHeadingTitle} from "../../../shared/MainHeadingTitle.tsx";


export const HomeTestimonial = () => {
    const StyleDescription = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
    return (
        <section id={`home-testimonial`} className={`bg-white py-[4.8rem] sm:py-[9.6rem] relative`}>
            <div className={`max-w-[1400px] mx-auto sm:px[1rem] px-[3.2rem] lg:px-[9.6rem]`}>
                <div className={`text-center mb-[20px]`}>
                    <MainHeadingTitle styleDescription={StyleDescription} title={'Testimonial'} description={'What Our Customer Saying?'} />
                </div>

                <div className={`my-[40px]`}>
                    <TestimonialSlider/>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-4 mx-auto w-fit gap-x-10 gap-y-4 sm:gap-4`}>
                    {
                        HomeTestimonialStatus.map((status) => (
                            <TestimonialProgress key={status.id} {...status} />
                            ))
                        }
                </div>
            </div>
        </section>
    );
};
