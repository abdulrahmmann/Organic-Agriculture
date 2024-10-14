import {HomeTestimonialClients} from "../../../constants";
import {TestimonialSingleSlide} from "./TestimonialSingleSlide";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const TestimonialSlider = () => {
    return (
        <div className={`flex justify-center items-center border-b-[1px] border-b-GreyBackground  pb-[60px] mb-[10px]`}>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                loop={true}
                direction={"horizontal"}
                pagination={{ clickable: true }}
            >
                {
                    HomeTestimonialClients.map((client) => (
                        <SwiperSlide>
                            <TestimonialSingleSlide key={client.id} {...client} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

